import BinaryExpression from './binary';

export default class ConditionalExpression extends BinaryExpression {
    isLike (other) {
        return other instanceof ConditionalExpression;
    }

    present () {
        return `${this.presentLeft()} → ${this.presentRight()}`;
    }
}
