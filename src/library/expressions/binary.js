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

    shouldPresentLeftWithoutParenthesis () {
        return this.isLeftIdentifier() || this.isLeftLike();
    }

    shouldPresentRightWithoutParenthesis () {
        return this.isRightIdentifier() || this.isRightLike();
    }

    presentLeft () {
        if (this.shouldPresentLeftWithoutParenthesis()) {
            return this.left.present();
        }

        return `(${this.left.present()})`;
    }

    presentRight () {
        if (this.shouldPresentRightWithoutParenthesis()) {
            return this.right.present();
        }

        return `(${this.right.present()})`;
    }

    isLeftLike () {
        throw new Error('isLeftLike must be implemented');
    }

    isRightLike () {
        throw new Error('isRightLike must be implemented');
    }

    present () {
        throw new Error('present must be implemented!');
    }
}
