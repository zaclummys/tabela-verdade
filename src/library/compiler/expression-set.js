import { Identifier } from "../expressions";

export default class ExpressionSet {
    constructor () {
        this.expressions = [];
    }

    has (expressionToBeCompared) {
        return this.expressions.some(expression => {
            return expression.equals(expressionToBeCompared);
        });
    }

    add (expressionToBeAdded) {
        if (!this.has(expressionToBeAdded)) {
            this.expressions.push(expressionToBeAdded);
        }
    }

    toSortedArray () {
        return this.expressions.slice().sort((expressionA, expressionB) => {
            const aIsIdentifier = expressionA instanceof Identifier;
            const bIsIdentifier = expressionB instanceof Identifier;

            if (aIsIdentifier && !bIsIdentifier) {
                return -1;
            }

            if (!aIsIdentifier && bIsIdentifier) {
                return 1;
            }

            return 0;
        });
    }
}