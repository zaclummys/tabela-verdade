import {
    AndExpression,
    BiconditionalExpression,
    BinaryExpression,
    ConditionalExpression,
    NameExpression,
    NotExpression,
    OrExpression,
    UnaryExpression,
} from './expressions';

export default class Interpreter {
    constructor (variables) {
        this.variables = variables;
    }

    evaluate (expression) {
        if (expression instanceof NameExpression) {
            return this.evaluateNameExpression(expression);
        } else if (expression instanceof UnaryExpression) {
            return this.evaluateUnaryExpression(expression);
        } else if (expression instanceof BinaryExpression) {
            return this.evaluateBinaryExpression(expression);
        } else {
            throw new Error('Unable to evaluate expression');
        }
    }

    evaluateNameExpression (expression) {
        return this.variables.get(expression.name);
    }

    evaluateBinaryExpression (expression) {
        const left = this.evaluate(expression.getLeft());
        const right = this.evaluate(expression.getRight());

        if (expression instanceof AndExpression) {
            return left && right;
        } else if (expression instanceof OrExpression) {
            return left || right;
        } else if (expression instanceof ConditionalExpression) {
            return !left || right;
        } else if (expression instanceof BiconditionalExpression) {
            return (left && right) || (!left && !right);
        } else {
            throw new Error('Unable to evaluate binary expression');
        }
    }

    evaluateUnaryExpression (expression) {
        const inner = this.evaluate(expression.getInner());

        if (expression instanceof NotExpression) {
            return !inner;
        } else {
            throw new Error('Unable to evaluate unary expression');
        }
    }
}
