import { CLEAR_INPUT, SET_INPUT, SET_ERROR } from './actions';

export default function reducer (state = {}, action) {
    switch (action.type) {
        case CLEAR_INPUT:
            return {
                ...state,
                input: null,
            };

        case SET_INPUT:
            return {
                ...state,
                input: action.input,
            };

        case SET_ERROR:
            return {
                ...state,
                error: action.error,
            };

        default:
            return state;
    }
}
