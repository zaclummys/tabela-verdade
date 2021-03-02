import UnaryExpression from './unary';

export default class NotExpression extends UnaryExpression {
    equals (other) {
        if (other instanceof NotExpression) {
            return this.inner.equals(other.inner);
        }

        return false;
    }

    present () {
        return `¬ ${this.presentInner()}`;
    }
}
