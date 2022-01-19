import Expression from './expression';

export default class Identifier extends Expression {
    constructor (name) {
        super();

        this.name = name;
    }

    isLike (other) {
        return other instanceof Identifier;
    }

    isEqual (other) {
        return this.isLike(other) && this.name === other.name;
    }

    shouldPresentWithoutParenthesis () {
        return true;
    }

    present () {
        return this.name;
    }
}
