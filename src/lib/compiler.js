import {
    Identifier,

    NotExpression,
    OrExpression,
    AndExpression,

    ImplicationExpression,
    EquivalenceExpression,
} from './expressions';

export default class Compiler {
    constructor () {
        this.names = [];
        this.expressions = [];
    }

    store (expression) {
        if (this.expressions.some((e) => expression.equals(e))) {
            return;
        }

        this.expressions.push(expression);
    }

    name (name) {
        if (!this.names.includes(name)) {
            this.names.push(name);
        }
    }

    compile (expression) {
        if (expression instanceof Identifier) {
            this.name(expression.name);
        }
        else if (expression instanceof NotExpression) {
            this.compile(expression.inner);
        }
        else if (expression instanceof AndExpression) {
            this.compile(expression.left);
            this.compile(expression.right);
        }
        else if (expression instanceof OrExpression) {
            this.compile(expression.left);
            this.compile(expression.right);
        }
        else if (expression instanceof ImplicationExpression) {
            this.compile(expression.left);
            this.compile(expression.right);
        }
        else if (expression instanceof EquivalenceExpression) {
            this.compile(expression.left);
            this.compile(expression.right);
        }

        this.store(expression);
    }
}
