import {
    Identifier,

    NotExpression,
    OrExpression,
    AndExpression,

    ImplicationExpression,
    EquivalenceExpression,
} from './expressions';

export default class Interpreter {
    constructor (variables) {
        this.variables = variables;
    }

    getVariableValue (variable) {
        return this.variables.get(variable);
    }

    evaluate (expression) {
        if (expression instanceof Identifier) {
           return this.getVariableValue(expression.name);
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

        if (expression instanceof ImplicationExpression) {
            const left = this.evaluate(expression.left);
            const right = this.evaluate(expression.right);

            return !left || right;
        }

        if (expression instanceof EquivalenceExpression) {
            const left = this.evaluate(expression.left);
            const right = this.evaluate(expression.right);

            return (left && right) || (!left && !right);
        }

        throw new Error('Unexpected expression');
    }
}