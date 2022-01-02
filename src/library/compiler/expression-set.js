import { Identifier } from "../expressions";

function isIdentifier (expression) {
    return expression instanceof Identifier;
}

function identifiersComeFirst (expressionA, expressionB) {
    const aIsIdentifier = isIdentifier(expressionA);
    const bIsIdentifier = isIdentifier(expressionB);

    if (aIsIdentifier && !bIsIdentifier) {
        return -1;
    }

    if (!aIsIdentifier && bIsIdentifier) {
        return 1;
    }

    return 0;
}

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

    cloneIntoSortedArray () {
        return this.expressions.slice().sort(identifiersComeFirst);
    }
}