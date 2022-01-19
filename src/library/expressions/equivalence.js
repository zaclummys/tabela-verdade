import BinaryExpression from './binary';

export default class EquivalenceExpression extends BinaryExpression {
    isLike (other) {
        return other instanceof EquivalenceExpression;
    }

    present () {
        return `${this.presentLeft()} ↔ ${this.presentRight()}`;
    }
}
