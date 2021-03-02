import Identifier from './identifier';

export default class BinaryExpression {
    constructor (left, right) {
        this.left = left;
        this.right = right;
    }

    presentLeft () {
        if (this.left instanceof Identifier) {
            return this.left.present();
        }

        return `(${this.left.present()})`;
    }

    presentRight () {
        if (this.right instanceof Identifier) {
            return this.right.present();
        }

        return `(${this.right.present()})`;
    }
}
