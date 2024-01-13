import {
    Name,

    Not,
    And,
    Or,

    Conditional,
    Biconditional,

    OpeningParenthesis,
    ClosingParenthesis,

    End,
} from './tokens';

import operators from './operators';

function isWhiteSpace (ch) {
    const whitespaces = [
        '\n',
        '\r',
        '\t',
        '\v',
        '\b',
        '\f',
        '\x20',
        '\xA0',
    ];

    return whitespaces.includes(ch);
}

function isNumber (ch) {
    return ch >= '0' && ch <= '9';
}

function isAlphabetic (ch) {
    return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}

export default class Lexer {
    constructor (source) {
        this.source = source;
    }

    // eslint-disable-next-line max-statements
    next () {
        this.source.skipWhile(isWhiteSpace);

        const ch = this.source.peek();

        if (!ch) {
            return new End();
        }

        if (operators.regular.negation.includes(ch)) {
            return this.consumeNotOperatator();
        } else if (operators.regular.conjunction.includes(ch)) {
            return this.consumeConjunctionOperator();
        } else if (operators.regular.disjunction.includes(ch)) {
            return this.consumeDisjunctionOperator();
        } else if (operators.regular.conditional.includes(ch)) {
            return this.consumeConditionalOperator();
        } else if (operators.regular.biconditional.includes(ch)) {
            return this.consumeBiconditionalOperator();
        }  else if (operators.longConditionalOperator.startsWith(ch)) {
            return this.consumeLongConditionalOperator();
        } else if (operators.longBiconditinalOperator.startsWith(ch)) {
            return this.consumeLongBiconditionalOperator();
        } else if (ch === operators.wrapping.parenthesis.opening) {
            return this.consumeOpeningParenthesis();
        } else if (ch === operators.wrapping.parenthesis.closing) {
            return this.consumeClosingParenthesis();
        } else if (isAlphabetic(ch)) {
            return this.consumeName();
        } else {
            throw new Error(`Unexpected character: ${ch}`);
        }
    }

    consumeConjunctionOperator () {
        this.source.bump();

        return new And();
    }

    consumeDisjunctionOperator () {
        this.source.bump();

        return new Or();
    }

    consumeConditionalOperator () {
        this.source.bump();

        return new Conditional();
    }

    consumeBiconditionalOperator () {
        this.source.bump();

        return new Biconditional();
    }

    consumeOpeningParenthesis () {
        this.source.bump();

        return new OpeningParenthesis();
    }

    consumeClosingParenthesis () {
        this.source.bump();

        return new ClosingParenthesis();
    }

    consumeNotOperatator () {
        this.source.bump();

        return new Not();
    }

    consumeName () {
        const name = this.source.takeWhile((ch) => isAlphabetic(ch) || isNumber(ch));

        return new Name(name);
    }

    consumeLongConditionalOperator () {
        for (const ch of operators.longConditionalOperator) {
            if (ch === this.source.peek()) {
                this.source.bump();
            } else {
                throw new Error(`Expected character: ${ch}`);
            }
        }

        return new Conditional();
    }

    consumeLongBiconditionalOperator () {
        for (const ch of operators.longBiconditinalOperator) {
            if (ch === this.source.peek()) {
                this.source.bump();
            } else {
                throw new Error(`Expected character: ${ch}`);
            }
        }

        return new Biconditional();
    }
}
