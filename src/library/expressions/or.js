import BinaryExpression from './binary';

export default class OrExpression extends BinaryExpression {
    isLike (other) {
        return other instanceof OrExpression;
    }

    present () {
        return `${this.presentLeft()} ∨ ${this.presentRight()}`;
    }
}
