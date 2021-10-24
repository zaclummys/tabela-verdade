export default class Identifier {
    constructor (name) {
        this.name = name;
    }

    equals (other) {
        if (other instanceof Identifier) {
            return this.name === other.name;
        }

        return false;
    }

    present () {
        return this.name;
    }
}
