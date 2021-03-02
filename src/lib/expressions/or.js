import BinaryExpression from './binary';

export default class OrExpression extends BinaryExpression {
    equals (other) {
        if (other instanceof OrExpression) {
            return this.left.equals(other.left) && this.right.equals(other.right);
        }

        return false;
    }

    present () {
        return `${this.presentLeft()} ∨ ${this.presentRight()}`;
    }
}
