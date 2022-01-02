import BinaryExpression from './binary';

export default class AndExpression extends BinaryExpression {
    equals (other) {
        if (other instanceof AndExpression) {
            return this.left.equals(other.left) && this.right.equals(other.right);
        }

        return false;
    }

    isLeftLike () {
        return this.left instanceof AndExpression;
    }

    isRightLike () {
        return this.right instanceof AndExpression;
    }

    present () {
        return `${this.presentLeft()} ∧ ${this.presentRight()}`;
    }
}
