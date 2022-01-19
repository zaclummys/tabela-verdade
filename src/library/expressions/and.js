import BinaryExpression from './binary';

export default class AndExpression extends BinaryExpression {
    isLike (other) {
        return other instanceof AndExpression;
    }

    present () {
        return `${this.presentLeft()} ∧ ${this.presentRight()}`;
    }
}