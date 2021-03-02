export const CLEAR_INPUT = 'CLEAR_INPUT';
export const SET_INPUT = 'SET_INPUT';
export const SET_ERROR = 'SET_ERROR';

export function clearInput () {
    return {
        type: CLEAR_INPUT,
    };
}

export function setInput (input) {
    return {
        input,
        type: SET_INPUT,
    };
}

export function setError (error) {
    return {
        error,
        type: SET_ERROR,
    };
}
