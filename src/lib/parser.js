import {
    Name,

    Not,
    And,
    Or,

    Implication,
    Equivalence,

    OpeningParenthesis,
    ClosingParenthesis,
} from './tokens';

import {
    Identifier,

    NotExpression,
    AndExpression,
    OrExpression,

    ImplicationExpression,
    EquivalenceExpression,
} from './expressions';

export default class Parser {
    constructor (tokens) {
        this.tokens = tokens;
    }

    check (t) {
        return this.tokens.peek() instanceof t;
    }

    match (t) {
        if (this.check(t)) {
            return this.tokens.next();
        }

        return null;
    }

    parse () {
        return this.parseConditionalExpression();
    }

    parseConditionalExpression () {
        const expression = this.parseOrExpression();

        if (this.match(Implication)) {
            return new ImplicationExpression(expression, this.parseConditionalExpression());
        }

        if (this.match(Equivalence)) {
            return new EquivalenceExpression(expression, this.parseConditionalExpression());
        }

        return expression;
    }

    parseOrExpression () {
        const expression = this.parseAndExpression();

        if (this.match(Or)) {
            return new OrExpression(expression, this.parseOrExpression());
        }

        return expression;
    }

    parseAndExpression () {
        const expression = this.parseNotExpression();

        if (this.match(And)) {
            return new AndExpression(expression, this.parseAndExpression());
        }

        return expression;
    }

    parseNotExpression () {
        if (this.match(Not)) {
            return new NotExpression(this.parseNotExpression());
        }

        return this.parsePrimaryExpression();
    }

    parsePrimaryExpression () {
        const token = this.tokens.peek();

        if (token instanceof OpeningParenthesis) {
            return this.parseParenthesisExpression();
        }

        if (token instanceof Name) {
            return this.parseIdentifier();
        }

        throw new Error('Unexpected expression');
    }

    parseParenthesisExpression () {
        if (this.match(OpeningParenthesis) == null) {
            throw new Error('Expected opening parenthesis');
        }

        const expression = this.parseConditionalExpression();

        if (this.match(ClosingParenthesis) == null) {
            throw new Error('Expected closing parenthesis');
        }

        return expression;
    }

    parseIdentifier () {
        const token = this.tokens.next();

        if (token instanceof Name) {
            return new Identifier(token.name);
        }

        throw new Error('Expected identifier');
    }
}
