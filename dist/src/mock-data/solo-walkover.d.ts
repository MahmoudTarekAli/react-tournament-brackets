declare const _default: ({
    id: number;
    name: string;
    nextMatchId: number;
    nextLooserMatchId: any;
    tournamentRoundText: string;
    startTime: string;
    state: string;
    participants: {
        id: string;
        resultText: string;
        is_winner: boolean;
        status: string;
        name: string;
    }[];
} | {
    id: number;
    name: string;
    nextMatchId: any;
    nextLooserMatchId: any;
    tournamentRoundText: string;
    startTime: string;
    state: string;
    participants: ({
        id: string;
        resultText: any;
        is_winner: boolean;
        status: any;
        name: string;
    } | {
        id: any;
        resultText: any;
        is_winner: boolean;
        status: string;
        name?: undefined;
    })[];
})[];
export default _default;
