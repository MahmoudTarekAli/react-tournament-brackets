export declare const walkOverData: ({
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
        isWinner: boolean;
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
        isWinner: boolean;
        status: any;
        name: string;
    } | {
        id: any;
        resultText: any;
        isWinner: boolean;
        status: string;
        name?: undefined;
    })[];
})[];
export declare const simpleSmallBracket: {
    id: number;
    status: string;
    has_conflict: boolean;
    on_solution: boolean;
    round_id: number;
    order: number;
    code: string;
    match_no: number;
    start_at: any;
    is_losers_match: boolean;
    publisher_match_code: any;
    nextMatchId: string;
    is_claimable: boolean;
    home: {
        participant_id: number;
        participant_type: string;
        match_id: number;
        side: string;
        score: number;
        is_winner: boolean;
        tournament_participant: {
            participant_id: number;
            type: string;
            participant_name: any;
            is_dummy: boolean;
            reference_number: any;
            supported_required_inputs: any;
            accounts: any[];
        };
        original: {
            id: number;
            country: string;
            participant_name: string;
            reference_number: string;
            slug: string;
            is_premium: boolean;
            avatar: string;
        };
    };
    away: {
        participant_id: number;
        participant_type: string;
        match_id: number;
        side: string;
        score: number;
        is_winner: boolean;
        tournament_participant: {
            participant_id: number;
            type: string;
            participant_name: any;
            is_dummy: boolean;
            reference_number: any;
            supported_required_inputs: any;
            accounts: any[];
        };
        original: {
            id: number;
            country: string;
            participant_name: string;
            reference_number: string;
            slug: string;
            is_premium: boolean;
            avatar: string;
        };
    };
    participants: {
        participant_id: number;
        participant_type: string;
        match_id: number;
        side: string;
        score: number;
        is_winner: boolean;
        original: {
            id: number;
            country: string;
            participant_name: string;
            reference_number: string;
            slug: string;
            is_premium: boolean;
            avatar: string;
        };
    }[];
    claims: any[];
}[];
export declare const largeBracket: {
    id: number;
    status: string;
    has_conflict: boolean;
    on_solution: boolean;
    round_id: number;
    order: number;
    code: string;
    match_no: number;
    start_at: any;
    is_losers_match: boolean;
    publisher_match_code: any;
    nextMatchId: string;
    is_claimable: boolean;
    home: {
        participant_id: number;
        participant_type: string;
        match_id: number;
        side: string;
        score: number;
        is_winner: boolean;
        tournament_participant: {
            participant_id: number;
            type: string;
            participant_name: any;
            is_dummy: boolean;
            reference_number: any;
            supported_required_inputs: any;
            accounts: any[];
        };
        original: {
            id: number;
            country: string;
            participant_name: string;
            reference_number: string;
            slug: string;
            is_premium: boolean;
            avatar: string;
        };
    };
    away: {
        participant_id: number;
        participant_type: string;
        match_id: number;
        side: string;
        score: number;
        is_winner: boolean;
        tournament_participant: {
            participant_id: number;
            type: string;
            participant_name: any;
            is_dummy: boolean;
            reference_number: any;
            supported_required_inputs: any;
            accounts: any[];
        };
        original: {
            id: number;
            country: string;
            participant_name: string;
            reference_number: string;
            slug: string;
            is_premium: boolean;
            avatar: string;
        };
    };
    participants: {
        participant_id: number;
        participant_type: string;
        match_id: number;
        side: string;
        score: number;
        is_winner: boolean;
        original: {
            id: number;
            country: string;
            participant_name: string;
            reference_number: string;
            slug: string;
            is_premium: boolean;
            avatar: string;
        };
    }[];
    claims: any[];
}[];
export declare const simpleBracket: {
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
        picture: string;
    }[];
}[];
