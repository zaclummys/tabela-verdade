import BinaryExpression from './binary';

export default class BiconditionalExpression extends BinaryExpression {
    isLike (other) {
        return other instanceof BiconditionalExpression;
    }

    present () {
        return `${this.presentLeft()} ↔ ${this.presentRight()}`;
    }
}
