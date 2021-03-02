import BinaryExpression from './binary';

export default class AndExpression extends BinaryExpression {
    equals (other) {
        if (other instanceof AndExpression) {
            return this.left.equals(other.left) && this.right.equals(other.right);
        }

        return false;
    }

    present () {
        return `${this.presentLeft()} ∧ ${this.presentRight()}`;
    }
}
