import Identifier from './identifier';

export default class UnaryExpression {
    constructor (inner) {
        this.inner = inner;
    }

    isInnerIdentifier () {
        return this.inner instanceof Identifier;
    }

    isInnerSameConstructor () {
        return this.constructor === this.inner.constructor;
    }

    presentInner () {
        if (this.isInnerIdentifier() || this.isInnerSameConstructor()) {
            return this.inner.present();
        }

        return `(${this.inner.present()})`;
    }
}
