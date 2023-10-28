import {
    UnaryExpression,
    BinaryExpression,
} from '../../expressions';

export default class ExpressionsExtractor {
    constructor () {
        this.expressions = [];
    }

    extract (expression) {
        if (expression instanceof BinaryExpression) {
            this.extract(expression.getLeft());
            this.extract(expression.getRight());
        } else if (expression instanceof UnaryExpression) {
            this.extract(expression.getInner());
        }

        this.addExpression(expression);
    }

    hasExpression (expressionToBeCompared) {
        return this.expressions.some(currentExpression => {
            return expressionToBeCompared.isEqual(currentExpression);
        });
    }

    addExpression (expressionToBeAdded) {
        if (!this.hasExpression(expressionToBeAdded)) {
            this.expressions.push(expressionToBeAdded);
        }
    }

    getExpressions () {
        return this.expressions;
    }
}