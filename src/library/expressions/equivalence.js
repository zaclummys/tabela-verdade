import BinaryExpression from './binary';

export default class EquivalenceExpression extends BinaryExpression {
    equals (other) {
        if (other instanceof EquivalenceExpression) {
            return this.left.equals(other.left) && this.right.equals(other.right);
        }

        return false;
    }

    isLeftLike () {
        return this.left instanceof EquivalenceExpression;
    }

    isRightLike () {
        return this.right instanceof EquivalenceExpression;
    }

    present () {
        return `${this.presentLeft()} ↔ ${this.presentRight()}`;
    }
}
