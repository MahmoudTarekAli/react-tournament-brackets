import React from 'react';
import { MatchComponentProps } from '../../types';
import {
  Score,
  Side,
  StyledMatch,
  Team,
  TopText,
  BottomText,
  Wrapper,
  Anchor,
} from './styles';

function Match({
  bottomHovered,
  bottomParty,
  bottomText,
  bottomWon,
  match,
  onMatchClick,
  onMouseEnter,
  onMouseLeave,
  onPartyClick,
  topHovered,
  topParty,
  topText,
  topWon,
  onScoreClick,
}: MatchComponentProps) {
  return (
    <Wrapper
      style={{
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      <div
        onClick={event => onScoreClick?.({ match, topWon, bottomWon, event })}
        style={{
          height: '70%',
          display: 'flex',
          alignItems: 'center',
          background: '#8429f5',
          flex: '1',
          justifyContent: 'center',
          borderRadius: '5px',
        }}
      >
        <img
          src={'https://cdn-icons-png.flaticon.com/512/1251/1251766.png'}
          width={30}
          loading="lazy"
          height={30}

        />
      </div>
      <div style={{ flex: 6 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {match.order === 2 && !match.nextMatchId ? (
            <TopText style={{ color: '#CD7F32' }}>3rd/4th Match</TopText>
          ) : (
            <TopText>#{match?.match_no}</TopText>
          )}
          {(match.href || typeof onMatchClick === 'function') && (
            <Anchor
              href={match.href}
              onClick={event =>
                onMatchClick?.({ match, topWon, bottomWon, event })
              }
            >
              <TopText style={{ display: 'none' }}>Match details</TopText>
            </Anchor>
          )}
        </div>

        <StyledMatch
          onClick={event => onMatchClick?.({ match, topWon, bottomWon, event })}
        >
          <Side
            onMouseEnter={() => onMouseEnter(topParty?.original?.id)}
            onMouseLeave={onMouseLeave}
            won={topWon}
            hovered={topHovered}
            onClick={() => onPartyClick?.(topParty, topWon)}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <img
                src={
                  topParty?.original?.avatar
                    ? topParty?.original?.avatar
                    : 'https://gbarena-development.s3.amazonaws.com/images/profile.svg'
                }
                width={topParty?.image?.width ? topParty.image.width : 30}
                height={topParty?.image?.height ? topParty.image.height : 30}
                alt="icon"
                loading="lazy"
                style={{
                  borderRadius: topParty?.image?.borderRadius
                    ? topParty.image.borderRadius
                    : 10,
                }}
              />
              <Team>
                {topParty?.original?.participant_name
                  ? topParty?.original?.participant_name
                  : 'Home Player'}{' '}
              </Team>
            </div>

            <Score won={topWon}>{topParty?.score}</Score>
          </Side>
          <Side
            onMouseEnter={() => onMouseEnter(bottomParty.original?.id)}
            onMouseLeave={onMouseLeave}
            won={bottomWon}
            hovered={bottomHovered}
            onClick={() => onPartyClick?.(bottomParty, bottomWon)}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <img
                src={
                  bottomParty?.original?.avatar
                    ? bottomParty?.original?.avatar
                    : 'https://gbarena-development.s3.amazonaws.com/images/profile.svg\n'
                }
                width={bottomParty?.image?.width ? bottomParty.image.width : 30}
                loading="lazy"
                height={
                  bottomParty?.image?.height ? bottomParty.image.height : 30
                }
                style={{
                  borderRadius: bottomParty?.image?.borderRadius
                    ? bottomParty.image.borderRadius
                    : 10,
                }}
              />
              <Team>
                {bottomParty?.original?.participant_name
                  ? bottomParty?.original?.participant_name
                  : 'Away Player'}
              </Team>
            </div>

            <Score won={bottomWon}>{bottomParty?.score}</Score>
          </Side>
        </StyledMatch>
        <BottomText>{bottomText ?? ' '}</BottomText>
      </div>
    </Wrapper>
  );
}

export default Match;
