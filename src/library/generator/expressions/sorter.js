import { NameExpression } from '../../expressions';

function getExpressionPrecedence (expression) {
    const before = 0;
    const after = 1;

    if (expression instanceof NameExpression) {
        return before;
    } else {
        return after;
    }
}

export default function sortExpressions (expressions) {
    return expressions.toSorted((expressionA, expressionB) => {
        const precedenceExpressionA = getExpressionPrecedence(expressionA);
        const precedenceExpressionB = getExpressionPrecedence(expressionB);

        return precedenceExpressionA - precedenceExpressionB;
    });
}
