import { sortAlphanumerically } from 'Utils/string';

export const generatePreviousRound = (matchesColumn, listOfMatches) =>
  matchesColumn.reduce((result, match) => {
    return [
      ...result,
      ...listOfMatches
        .filter(m => m.nextMatchId === match.code)
        .sort((a, b) => sortAlphanumerically(a.name, b.name)),
    ];
  }, []);

export function getPreviousMatches(
  columnIndex: number,
  columns: any[],
  previousBottomPosition: number
) {
  const previousTopMatch =
    columnIndex !== 0 && columns[columnIndex - 1][previousBottomPosition - 1];
  const previousBottomMatch =
    columnIndex !== 0 && columns[columnIndex - 1][previousBottomPosition];
  return { previousTopMatch, previousBottomMatch };
}

export function sortTeamsSeedOrder(previousBottomMatch: any): any {
  return (partyA, partyB) => {
    const partyAInBottomMatch = previousBottomMatch?.participants?.find(
      p => p.code === partyA.code
    );

    const partyBInBottomMatch = previousBottomMatch?.participants?.find(
      p => p.code === partyB.code
    );

    if (partyAInBottomMatch) {
      return 1;
    }
    if (partyBInBottomMatch) {
      return -1;
    }
    return 0;
  };
}
