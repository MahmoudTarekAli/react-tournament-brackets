import React, { useContext } from 'react';
import { matchContext } from './match-context';
import { MATCH_STATES } from './match-states';
import { defaultStyle, getCalculatedStyles } from '../settings';
import { sortTeamsSeedOrder } from './match-functions';

function Match({
  rowIndex,
  columnIndex,
  match,
  previousBottomMatch = null,
  teams,
  topText,
  bottomText,
  style = defaultStyle,
  matchComponent: MatchComponent,
  onMatchClick,
  onScoreClick,
  onPartyClick,
  ...rest
}) {
  const {
    state: { hoveredPartyId },
    dispatch,
  } = useContext(matchContext);
  const computedStyles = getCalculatedStyles(style);
  const { width = 300, boxHeight = 70, connectorColor } = computedStyles;
  const sortedTeams = teams.sort(sortTeamsSeedOrder(previousBottomMatch));
  const topParty = sortedTeams?.[0] ? sortedTeams[0] : {};
  const bottomParty = sortedTeams?.[1] ? sortedTeams[1] : {};

  if (sortedTeams?.length < 2) {
    if (sortedTeams?.[0]?.side === 'home') {
      sortedTeams.push({});
    } else {
      sortedTeams.unshift({});
    }
  }

  const topHovered =
    !Number.isNaN(hoveredPartyId) &&
    topParty?.original?.id !== undefined &&
    hoveredPartyId === topParty?.original?.id;
  const bottomHovered =
    !Number.isNaN(hoveredPartyId) &&
    bottomParty?.original?.id !== undefined &&
    hoveredPartyId === bottomParty?.original?.id;

  const participantWalkedOver = participant =>
    match.state === MATCH_STATES.WALK_OVER &&
    teams.filter(team => !!team.code).length < 2 &&
    participant?.original?.id;

  // Lower placement is better
  const topWon =
    topParty.status === MATCH_STATES.WALK_OVER ||
    participantWalkedOver(topParty) ||
    topParty?.is_winner;
  const bottomWon =
    bottomParty.status === MATCH_STATES.WALK_OVER ||
    participantWalkedOver(bottomParty) ||
    bottomParty?.is_winner;

  const matchState = MATCH_STATES[match.state];

  const teamNameFallback =
    {
      [MATCH_STATES.WALK_OVER]: '',
      [MATCH_STATES.NO_SHOW]: '',
      [MATCH_STATES.DONE]: '',
      [MATCH_STATES.SCORE_DONE]: '',
      [MATCH_STATES.NO_PARTY]: '',
    }[matchState] ?? 'TBD';

  const resultFallback = participant => {
    if (participant.status) {
      return (
        {
          WALKOVER: computedStyles.wonBywalkOverText,
          [MATCH_STATES.WALK_OVER]: computedStyles.wonBywalkOverText,
          [MATCH_STATES.NO_SHOW]: computedStyles.lostByNoShowText,
          [MATCH_STATES.NO_PARTY]: '',
        }[participant.status] ?? ''
      );
    }

    if (participantWalkedOver(participant)) {
      return computedStyles.wonBywalkOverText;
    }
    return '';
  };

  const onMouseEnter = partyId => {
    dispatch({
      type: 'SET_HOVERED_PARTYID',
      payload: {
        partyId,
        matchId: match.code,
        rowIndex,
        columnIndex,
      },
    });
  };
  const onMouseLeave = () => {
    dispatch({ type: 'SET_HOVERED_PARTYID', payload: null });
  };

  bottomParty.name = bottomParty.name || teamNameFallback;
  bottomParty.resultText =
    bottomParty.resultText || resultFallback(bottomParty);
  topParty.name = topParty.name || teamNameFallback;
  topParty.resultText = topParty.resultText || resultFallback(topParty);
  return (
    <svg
      width={width}
      height={boxHeight}
      viewBox={`0 0 ${width} ${boxHeight}`}
      {...rest}
    >
      <foreignObject x={0} y={0} width={width} height={boxHeight}>
        {/* TODO: Add OnClick Match handler */}
        {MatchComponent && (
          <MatchComponent
            {...{
              match,
              onScoreClick,
              onMatchClick,
              onPartyClick,
              onMouseEnter,
              onMouseLeave,
              topParty,
              bottomParty,
              topWon,
              bottomWon,
              topHovered,
              bottomHovered,
              topText,
              bottomText,
              connectorColor,
              computedStyles,
            }}
          />
        )}
      </foreignObject>
    </svg>
  );
}

export default Match;
