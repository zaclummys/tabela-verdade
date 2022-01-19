import Expression from './expression';

export default class UnaryExpression extends Expression {
    constructor (inner) {
        super();

        this.inner = inner;
    }

    shouldPresentWithoutParenthesis () {
        return false;
    }

    shouldPresentInnerWithoutParenthesis () {
        return this.inner.isLike(this) || this.inner.shouldPresentWithoutParenthesis();
    }

    presentInner () {
        if (this.shouldPresentInnerWithoutParenthesis()) {
            return `${this.inner.present()}`;
        } else {
            return `(${this.inner.present()})`;
        }
    }

    isEqual (other) {
        return this.isLike(other) && this.inner.isEqual(other.inner);
    }
}
