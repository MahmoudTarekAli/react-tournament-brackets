declare const _default: {
    upper: {
        id: string;
        name: string;
        nextMatchId: string;
        nextLooserMatchId: string;
        startTime: string;
        tournamentRound: string;
        state: string;
        participants: {
            id: string;
            resultText: string;
            is_winner: boolean;
            status: string;
            name: string;
        }[];
    }[];
    lower: {
        id: string;
        name: string;
        nextMatchId: string;
        nextLooserMatchId: any;
        startTime: string;
        tournamentRound: string;
        state: string;
        participants: {
            id: string;
            resultText: string;
            is_winner: boolean;
            status: string;
            name: string;
        }[];
    }[];
};
export default _default;
