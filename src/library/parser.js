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

import {
    NameExpression,

    NotExpression,
    AndExpression,
    OrExpression,

    ConditionalExpression,
    BiconditionalExpression,
} from './expressions';

export default class Parser {
    constructor (lexer) {
        this.lexer = lexer;
    }

    check (type) {
        return this.lexer.isPeekTypeOf(type);
    }

    match (type) {
        if (this.check(type)) {
            return this.lexer.next();
        }
    }

    parse () {
        const expression = this.parseBiconditionalExpression();

        if (this.check(End)) {
            return expression;
        }

        throw new Error('Expected end');
    }

    parseBiconditionalExpression () {
        const expression = this.parseConditionalExpression();

        if (this.match(Biconditional)) {
            return new BiconditionalExpression(expression, this.parseBiconditionalExpression());
        }

        return expression;
    }

    parseConditionalExpression () {
        const expression = this.parseOrExpression();

        if (this.match(Conditional)) {
            return new ConditionalExpression(expression, this.parseConditionalExpression());
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
        const token = this.lexer.peek();

        if (token instanceof OpeningParenthesis) {
            return this.parseParenthesisExpression();
        }

        if (token instanceof Name) {
            return this.parseNameExpression();
        }

        if (token instanceof End) {
            throw new Error('Unexpected end');
        }

        throw new Error('Unexpected token');
    }

    parseParenthesisExpression () {
        if (!this.match(OpeningParenthesis)) {
            throw new Error('Expected opening parenthesis');
        }

        const expression = this.parseBiconditionalExpression();

        if (!this.match(ClosingParenthesis)) {
            throw new Error('Expected closing parenthesis');
        }

        return expression;
    }

    parseNameExpression () {
        const name = this.match(Name);

        if (name) {
            return new NameExpression(name.getName());
        } else {
            throw new Error('Expected name');
        }
    }
}
