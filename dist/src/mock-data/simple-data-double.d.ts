declare const _default: {
    upper: ({
        id: number;
        status: string;
        has_conflict: boolean;
        on_solution: boolean;
        round_id: number;
        order: number;
        code: string;
        match_no: number;
        start_at: any;
        publisher_match_code: any;
        is_losers_match: boolean;
        nextMatchId: string;
        winner_qualifies_to_position: string;
        nextLooserMatchId: string;
        loser_qualifies_to_position: string;
        home_qualified_from_status: any;
        home_qualified_from_match_no: any;
        away_qualified_from_status: any;
        away_qualified_from_match_no: any;
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
    } | {
        id: number;
        status: string;
        has_conflict: boolean;
        on_solution: boolean;
        round_id: number;
        order: number;
        code: string;
        match_no: number;
        start_at: any;
        publisher_match_code: any;
        is_losers_match: boolean;
        nextMatchId: string;
        winner_qualifies_to_position: string;
        nextLooserMatchId: string;
        loser_qualifies_to_position: string;
        home_qualified_from_status: string;
        home_qualified_from_match_no: number;
        away_qualified_from_status: string;
        away_qualified_from_match_no: number;
        home: {
            participant_id: number;
            participant_type: string;
            match_id: number;
            side: string;
            score: any;
            is_winner: boolean;
            tournament_participant: {
                participant_id: number;
                type: string;
                participant_name: any;
                is_dummy: boolean;
                reference_number: any;
                supported_required_inputs: any;
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
            score: any;
            is_winner: boolean;
            tournament_participant: {
                participant_id: number;
                type: string;
                participant_name: any;
                is_dummy: boolean;
                reference_number: any;
                supported_required_inputs: any;
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
    })[];
    lower: {
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
        winner_qualifies_to_position: string;
        nextLooserMatchId: any;
        loser_qualifies_to_position: any;
        home_qualified_from_status: string;
        home_qualified_from_match_no: number;
        away_qualified_from_status: string;
        away_qualified_from_match_no: number;
        home: {
            participant_id: number;
            participant_type: string;
            match_id: number;
            side: string;
            score: any;
            is_winner: boolean;
            tournament_participant: {
                participant_id: number;
                type: string;
                participant_name: any;
                is_dummy: boolean;
                reference_number: any;
                supported_required_inputs: any;
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
            score: any;
            is_winner: boolean;
            tournament_participant: {
                participant_id: number;
                type: string;
                participant_name: any;
                is_dummy: boolean;
                reference_number: any;
                supported_required_inputs: any;
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
            score: any;
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
};
export default _default;
