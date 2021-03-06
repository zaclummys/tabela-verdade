export const SET_INPUT = 'SET_INPUT';
export const SET_CURSOR = 'SET_CURSOR';
export const SET_ERROR = 'SET_ERROR';
export const ADD_CHARACTER = 'ADD_CHARACTER';

export function setInput (input) {
    return {
        type: SET_INPUT,
        input: input,
    };
}

export function setCursor (cursor) {
    return {
        type: SET_CURSOR,
        cursor: cursor,
    };
}

export function setError (error) {
    return {
        type: SET_ERROR,
        error: error,
    };
}

export function addCharacter (character) {
    return {
        type: ADD_CHARACTER,
        character: character,
    };
}
