import BinaryExpression from './binary';

export default class ImplicationExpression extends BinaryExpression {
    isLike (other) {
        return other instanceof ImplicationExpression;
    }

    present () {
        return `${this.presentLeft()} → ${this.presentRight()}`;
    }
}
