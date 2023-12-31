import {
    NameExpression,

    UnaryExpression,
    BinaryExpression,

    NotExpression,
    AndExpression,
    OrExpression,
    ConditionalExpression,
    BiconditionalExpression,
} from '../../expressions';

import {
    NameExpressionPresenter,
    NotExpressionPresenter,
    AndExpressionPresenter,
    OrExpressionPresenter,
    ConditionalExpressionPresenter,
    BiconditionalExpressionPresenter,
} from './implementations';

export default class ExpressionPresenterFactory {
    create (expression) {
        if (expression instanceof NameExpression) {
            return this.createFromNameExpression(expression);
        }

        if (expression instanceof UnaryExpression) {
            return this.createFromUnaryExpression(expression);
        }

        if (expression instanceof BinaryExpression) {
            return this.createFromBinaryExpression(expression);
        }

        throw new Error('Unexpected expression');
    }

    createFromNameExpression (expression) {
        const name = expression.getName();

        return new NameExpressionPresenter(name);
    }

    createFromUnaryExpression (expression) {
        const inner = this.create(expression.getInner());

        if (expression instanceof NotExpression) {
            return new NotExpressionPresenter(inner);
        }

        throw new Error('Unexpected unary expression');
    }

    createFromBinaryExpression (expression) {
        const left = this.create(expression.getLeft());
        const right = this.create(expression.getRight());

        if (expression instanceof AndExpression) {
            return new AndExpressionPresenter(
                left,
                right
            );
        }

        if (expression instanceof OrExpression) {
            return new OrExpressionPresenter(
                left,
                right
            );
        }

        if (expression instanceof ConditionalExpression) {
            return new ConditionalExpressionPresenter(
                left,
                right
            );
        }

        if (expression instanceof BiconditionalExpression) {
            return new BiconditionalExpressionPresenter(
                left,
                right
            );
        }

        throw new Error('Unexpected binary expression');
    }
}
