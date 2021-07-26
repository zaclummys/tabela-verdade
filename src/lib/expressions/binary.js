import Identifier from './identifier';

export default class BinaryExpression {
    constructor (left, right) {
        this.left = left;
        this.right = right;
    }

    isLeftIdentifier () {
        return this.left instanceof Identifier;
    }

    isRightIdentifier () {
        return this.right instanceof Identifier;
    }

    isLeftSameConstructor () {
        return this.constructor === this.left.constructor;
    }

    isRightSameConstructor () {
        return this.constructor === this.right.constructor;
    }

    presentLeft () {
        if (this.isLeftIdentifier() || this.isLeftSameConstructor()) {
            return this.left.present();
        }

        return `(${this.left.present()})`;
    }

    presentRight () {
        if (this.isRightIdentifier() || this.isRightSameConstructor()) {
            return this.right.present();
        }

        return `(${this.right.present()})`;
    }
}
