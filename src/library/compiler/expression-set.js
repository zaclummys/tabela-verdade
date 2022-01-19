export default class ExpressionSet {
    constructor () {
        this.expressions = [];
    }

    has (expressionToBeCompared) {
        return this.expressions.some(expression => {
            return expression.isEqual(expressionToBeCompared);
        });
    }

    add (expressionToBeAdded) {
        if (!this.has(expressionToBeAdded)) {
            this.expressions.push(expressionToBeAdded);
        }
    }

    asArray () {
        return this.expressions;
    }
}