import { NameExpression } from '../../expressions';

export default class ExpressionsSorter {
    getExpressionPrecedence (expression) {
        if (expression instanceof NameExpression) {
            return 0;
        } else {
            return 1;
        }
    }

    sort (expressions) {
        return expressions.slice()
            .sort((expressionA, expressionB) => {
                const precedenceExpressionA = this.getExpressionPrecedence(expressionA);
                const precedenceExpressionB = this.getExpressionPrecedence(expressionB);

                return precedenceExpressionA - precedenceExpressionB;
            });
    }
}