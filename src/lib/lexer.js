import {
    NOT,
    TILDE,
    EXCLAMATION,

    CARET,
    ASTERISK,
    AMPERSAND,
    LOGICAL_AND,

    PLUS,
    LOWER_V,
    UPPER_V,
    VERTICAL_LINE,
    LOGICAL_OR,

    RIGHTWARDS_ARROW,
    RIGHTWARDS_DOUBLE_ARROW,

    LEFT_RIGHT_ARROW,
    LEFT_RIGHT_DOUBLE_ARROW,

    OPENING_PARENTHESIS,
    CLOSING_PARENTHESIS,
} from './characters';

import {
    Name,

    Not,
    And,
    Or,

    Implication,
    Equivalence,

    OpeningParenthesis,
    ClosingParenthesis,

    End,
} from './tokens';

function isWhiteSpace (ch) {
    return ch === ' ' // Space
            || ch === '\n' // New line
            || ch === '\r' // Return
            || ch === '\t' // Tab
            || ch === '\v' // Vertical tab
            || ch === '\b' // Backspace
            || ch === '\f' // Form feed
            || ch === '\xA0'; // No-break space
}

function isNumber (ch) {
    return ch >= '0' && ch <= '9';
}

function isAlphabetic (ch) {
    return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}

export default class Lexer {
    constructor (source) {
        this.peeked = null;
        this.source = source;
    }

    unpeek () {
        this.peeked = null;
    }

    peek () {
        if (this.peeked === null) {
            this.peeked = this.lex();
        }

        return this.peeked;
    }

    next () {
        const peeked = this.peek();

        this.unpeek();

        return peeked;
    }

    name () {
        const start = this.source.at();

        while (isAlphabetic(this.source.peek()) || isNumber(this.source.peek())) {
            this.source.bump();
        }

        const end = this.source.at();

        return new Name(this.source.span(start, end));
    }

    skipWhiteSpaces () {
        while (isWhiteSpace(this.source.peek())) {
            this.source.bump();
        }
    }

    lex () {
        this.skipWhiteSpaces();

        const c = this.source.peek();

        switch (c) {
            case NOT:
            case TILDE:
            case EXCLAMATION:
                this.source.bump();

                return new Not();

            case CARET:
            case ASTERISK:
            case AMPERSAND:
            case LOGICAL_AND:
                this.source.bump();

                return new And();

            case PLUS:
            case LOWER_V:
            case UPPER_V:
            case VERTICAL_LINE:
            case LOGICAL_OR:
                this.source.bump();

                return new Or();

            case RIGHTWARDS_ARROW:
            case RIGHTWARDS_DOUBLE_ARROW:
                this.source.bump();

                return new Implication();

            case LEFT_RIGHT_ARROW:
            case LEFT_RIGHT_DOUBLE_ARROW:
                this.source.bump();

                return new Equivalence();

            case OPENING_PARENTHESIS:
                this.source.bump();

                return new OpeningParenthesis();

            case CLOSING_PARENTHESIS:
                this.source.bump();

                return new ClosingParenthesis();

            default:
                if (c) {
                    if (isAlphabetic(c)) {
                        return this.name();
                    }

                    if (c === '<') {
                        this.source.bump();

                        if (this.source.peek() === '-') {
                            this.source.bump();

                            if (this.source.peek() === '>') {
                                this.source.bump();

                                return new Equivalence();
                            }
                        }
                    }
                    else if (c === '-') {
                        this.source.bump();

                        if (this.source.peek() === '>') {
                            this.source.bump();

                            return new Implication();
                        }
                    }

                    throw new Error('Unexpected character');
                }

                return new End();
        }
    }
}
