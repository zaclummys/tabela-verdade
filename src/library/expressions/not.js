import UnaryExpression from './unary';

export default class NotExpression extends UnaryExpression {
    isLike (other) {
        return other instanceof NotExpression;
    }

    present () {
        return `¬ ${this.presentInner()}`;
    }
}
