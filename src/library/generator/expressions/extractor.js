import {
    UnaryExpression,
    BinaryExpression,
} from '../../expressions';

class ExpressionsExtractor {
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
        return this.expressions.some((currentExpression) => expressionToBeCompared.isEqual(currentExpression));
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

export default function extractExpressions (expression) {
    const extractor = new ExpressionsExtractor();

    extractor.extract(expression);

    return extractor.getExpressions();
}
