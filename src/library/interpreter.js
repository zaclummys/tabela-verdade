import {
    Identifier,

    NotExpression,
    OrExpression,
    AndExpression,

    ConditionalExpression,
    BiconditionalExpression,
} from './expressions';

export default class Interpreter {
    constructor (variables) {
        this.variables = variables;
    }

    evaluate (expression) {
        if (expression instanceof Identifier) {
            return this.variables.get(expression.name);
        }

        if (expression instanceof NotExpression) {
            return !this.evaluate(expression.inner);
        }

        if (expression instanceof AndExpression) {
            const left = this.evaluate(expression.left);
            const right = this.evaluate(expression.right);

            return left && right;
        }

        if (expression instanceof OrExpression) {
            const left = this.evaluate(expression.left);
            const right = this.evaluate(expression.right);

            return left || right;
        }

        if (expression instanceof ConditionalExpression) {
            const left = this.evaluate(expression.left);
            const right = this.evaluate(expression.right);

            return !left || right;
        }

        if (expression instanceof BiconditionalExpression) {
            const left = this.evaluate(expression.left);
            const right = this.evaluate(expression.right);

            return (left && right) || (!left && !right);
        }

        throw new Error('Unable to evaluate this expression');
    }

    *evaluateMany (expressions) {
        for (const expression of expressions) {
            yield this.evaluate(expression);
        }
    }
}