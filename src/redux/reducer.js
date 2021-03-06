import {
    SET_INPUT,
    SET_ERROR,
    ADD_CHARACTER,
    SET_CURSOR,
} from './actions';

const INITIAL_INPUT = '';
const INITIAL_ERROR = false;
const INITIAL_CURSOR = {
    start: 0,
    end: 0,
};

const INITIAL_STATE = {
    input: INITIAL_INPUT,
    error: INITIAL_ERROR,
    cursor: INITIAL_CURSOR,
};

function shiftCursor (cursor, character) {
    return {
        start: cursor.start + character.length,
        end: cursor.end + character.length,
    };
}

function addCharacter (input, cursor, character) {
    return input.substr(0, cursor.start) + character + input.substr(cursor.end);
}

export default function reducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_INPUT:
            return {
                ...state,
                error: false,
                input: action.input,
            };

        case SET_CURSOR:
            return {
                ...state,
                cursor: action.cursor,
            };

        case SET_ERROR:
            return {
                ...state,
                error: action.error,
            };

        case ADD_CHARACTER:
            return {
                ...state,
                cursor: shiftCursor(state.cursor, action.character),
                input: addCharacter(state.input, state.cursor, action.character),
            };

        default:
            return state;
    }
}
