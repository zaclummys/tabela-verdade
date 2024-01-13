import {
    OPENING_PARENTHESIS,
    CLOSING_PARENTHESIS,

    TILDE,
    LOGICAL_NOT,
    EXCLAMATION,

    CARET,
    AMPERSAND,
    ASTERISK,
    LOGICAL_AND,

    PLUS,
    LOGICAL_OR,
    VERTICAL_LINE,

    LEFT_RIGHT_ARROW,
    LEFT_RIGHT_DOUBLE_ARROW,

    RIGHTWARDS_ARROW,
    RIGHTWARDS_DOUBLE_ARROW,
} from './characters';

const wrapping = {
    parenthesis: {
        opening: OPENING_PARENTHESIS,
        closing: CLOSING_PARENTHESIS,
    },
};

const regular = {
    negation: [
        TILDE,
        EXCLAMATION,
        LOGICAL_NOT,
    ],

    conjunction: [
        CARET,
        ASTERISK,
        AMPERSAND,
        LOGICAL_AND,
    ],

    disjunction: [
        PLUS,
        VERTICAL_LINE,
        LOGICAL_OR,
    ],

    conditional: [
        RIGHTWARDS_ARROW,
        RIGHTWARDS_DOUBLE_ARROW,
    ],

    biconditional: [
        LEFT_RIGHT_ARROW,
        LEFT_RIGHT_DOUBLE_ARROW,
    ],
};


const longBiconditinalOperator = '<->';
const longConditionalOperator = '->';

const operators = {
    wrapping,
    regular,
    longBiconditinalOperator,
    longConditionalOperator,
};

export default operators;
