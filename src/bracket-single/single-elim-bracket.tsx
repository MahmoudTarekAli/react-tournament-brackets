import React from 'react';
import { ThemeProvider } from 'styled-components';
import { sortAlphanumerically } from 'Utils/string';
import { calculateSVGDimensions } from 'Core/calculate-svg-dimensions';
import { MatchContextProvider } from 'Core/match-context';
import MatchWrapper from 'Core/match-wrapper';
import RoundHeader from 'Components/round-header';
import { getPreviousMatches } from 'Core/match-functions';
import { SingleElimLeaderboardProps } from '../types';
import { defaultStyle, getCalculatedStyles } from '../settings';
import { calculatePositionOfMatch } from './calculate-match-position';

import Connectors from './connectors';
import defaultTheme from '../themes/themes';

const SingleEliminationBracket = ({
  matches,
  matchComponent,
  currentRound,
  onMatchClick,
  onScoreClick,
  onPartyClick,
  svgWrapper: SvgWrapper = ({ children }) => <div>{children}</div>,
  theme = defaultTheme,
  options: { style: inputStyle } = {
    style: defaultStyle,
  },
}: SingleElimLeaderboardProps) => {
  const style = {
    ...defaultStyle,
    ...inputStyle,
    roundHeader: {
      ...defaultStyle.roundHeader,
      ...inputStyle.roundHeader,
    },
    lineInfo: {
      ...defaultStyle.lineInfo,
      ...inputStyle.lineInfo,
    },
  };

  const { roundHeader, columnWidth, canvasPadding, rowHeight, width } =
    getCalculatedStyles(style);
  const lastGame = matches.find(match => !match.nextMatchId);
  const third = matches.find(match => !match.nextMatchId && match.order === 2);

  const generateColumn = matchesColumn => {
    const previousMatchesColumn = matchesColumn.reduce((result, match) => {
      return [
        ...result,
        ...matches
          .filter(m => m.nextMatchId === match.code)
          .sort((a, b) => sortAlphanumerically(a.name, b.name)),
      ];
    }, []);
    if (previousMatchesColumn.length > 0) {
      return [...generateColumn(previousMatchesColumn), previousMatchesColumn];
    }
    return [previousMatchesColumn];
  };
  const generate2DBracketArray = final => {
    return final
      ? [...generateColumn([final]), [final]].filter(arr => arr.length > 0)
      : [];
  };
  const columns = generate2DBracketArray(lastGame);
  // columns[columns.length - 1].push(third);
  // [
  //   [ First column ]
  //   [ 2nd column ]
  //   [ 3rd column ]
  //   [ lastGame ]
  // ]

  const positions = [];
  let thirdFourthPosition;

  const calculateThirdFourthMatchPosition = (x, y) => {
    if (!positions.includes({ x, y })) {
      positions.push({ x, y });
    }
    if (positions[positions.length - 1]) {
      thirdFourthPosition = {
        x: positions[positions.length - 1].x,
        y: positions[positions.length - 1].y + 170,
      };
    }
  };

  const { gameWidth, gameHeight, startPosition } = calculateSVGDimensions(
    columns[0].length,
    columns.length,
    rowHeight,
    columnWidth,
    canvasPadding,
    roundHeader,
    currentRound
  );
  return (
    <ThemeProvider theme={theme}>
      <SvgWrapper
        bracketWidth={matches.length <= 4 ? 650 : gameWidth}
        bracketHeight={matches.length <= 4 ? 650 : gameHeight}
        startAt={startPosition}
      >
        <svg
          height={matches.length <= 4 ? 650 : gameHeight}
          width={matches.length <= 4 ? 650 : gameWidth}
          viewBox={`0 0 ${matches.length <= 4 ? 650 : gameWidth} ${
            matches.length <= 4 ? 650 : gameHeight
          }`}
        >
          <MatchContextProvider>
            <g>
              {columns.map((matchesColumn, columnIndex) =>
                matchesColumn.map((match, rowIndex) => {
                  const { x, y } = calculatePositionOfMatch(
                    rowIndex,
                    columnIndex,
                    {
                      canvasPadding,
                      columnWidth,
                      rowHeight,
                    }
                  );
                  {
                    calculateThirdFourthMatchPosition(
                      x,
                      y +
                        (roundHeader.isShown
                          ? roundHeader.height + roundHeader.marginBottom
                          : 0)
                    );
                  }
                  const previousBottomPosition = (rowIndex + 1) * 2 - 1;
                  const { previousTopMatch, previousBottomMatch } =
                    getPreviousMatches(
                      columnIndex,
                      columns,
                      previousBottomPosition
                    );
                  return (
                    <>
                      {roundHeader.isShown && (
                        <RoundHeader
                          x={x}
                          roundHeader={roundHeader}
                          canvasPadding={canvasPadding}
                          width={width}
                          numOfRounds={columns.length}
                          tournamentRoundText={match.tournamentRoundText}
                          columnIndex={columnIndex}
                          matchesColumn={matchesColumn}
                          isDouble={false}
                        />
                      )}
                      {columnIndex !== 0 && (
                        <Connectors
                          {...{
                            bracketSnippet: {
                              currentMatch: match,
                              previousTopMatch,
                              previousBottomMatch,
                            },
                            rowIndex,
                            columnIndex,
                            gameHeight,
                            gameWidth,
                            style,
                          }}
                        />
                      )}

                      <g>
                        <MatchWrapper
                          x={x}
                          y={
                            y +
                            (roundHeader.isShown
                              ? roundHeader.height + roundHeader.marginBottom
                              : 0)
                          }
                          key={match.code}
                          rowIndex={rowIndex}
                          columnIndex={columnIndex}
                          match={match}
                          previousBottomMatch={previousBottomMatch}
                          topText={match.startTime}
                          bottomText={match.name}
                          teams={match.participants}
                          onMatchClick={onMatchClick}
                          onScoreClick={onScoreClick}
                          onPartyClick={onPartyClick}
                          style={style}
                          matchComponent={matchComponent}
                        />
                      </g>
                    </>
                  );
                })
              )}
            </g>
            {third && (
              <g>
                <MatchWrapper
                  x={thirdFourthPosition.x}
                  y={thirdFourthPosition.y}
                  key={third.code}
                  rowIndex={0}
                  columnIndex={0}
                  match={third}
                  topText={third.startTime}
                  bottomText={third.name}
                  teams={third.participants}
                  onMatchClick={onMatchClick}
                  onScoreClick={onScoreClick}
                  onPartyClick={onPartyClick}
                  style={style}
                  matchComponent={matchComponent}
                />
              </g>
            )}
          </MatchContextProvider>
        </svg>
      </SvgWrapper>
    </ThemeProvider>
  );
};

export default SingleEliminationBracket;
