import {
    Identifier,
    NotExpression,
} from '../expressions';

function getExpressionPrecedence (expression) {
    if (expression instanceof Identifier) {
        return 0;
    }

    if (expression instanceof NotExpression) {
        return 1;
    }

    return 2;
}

export function compareExpressionPrecedences (expressionA, expressionB) {
    const aPrecedence = getExpressionPrecedence(expressionA);
    const bPrecedence = getExpressionPrecedence(expressionB);

    return aPrecedence - bPrecedence;
}
