import Expression from './expression';

export default class BinaryExpression extends Expression {
    constructor (left, right) {
        super();

        this.left = left;
        this.right = right;
    }

    shouldPresentWithoutParenthesis () {
        return false;
    }

    shouldPresentLeftWithoutParenthesis () {
        return this.left.isLike(this) || this.left.shouldPresentWithoutParenthesis();
    }

    shouldPresentRightWithoutParenthesis () {
        return this.right.isLike(this) || this.right.shouldPresentWithoutParenthesis();
    }

    presentLeft () {
        if (this.shouldPresentLeftWithoutParenthesis()) {
            return `${this.left.present()}`;
        } else {
            return `(${this.left.present()})`;
        }
    }

    presentRight () {
        if (this.shouldPresentRightWithoutParenthesis()) {
            return `${this.right.present()}`;
        } else {
            return `(${this.right.present()})`;
        }
    }

    isEqual (other) {
        return this.isLike(other) && this.left.isEqual(other.left) && this.right.isEqual(other.right);
    }
}

