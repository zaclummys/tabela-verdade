import Identifier from './identifier';

export default class UnaryExpression {
    constructor (inner) {
        this.inner = inner;
    }

    presentInner () {
        if (this.inner instanceof Identifier) {
            return this.inner.present();
        }

        return `(${this.inner.present()})`;
    }
}
