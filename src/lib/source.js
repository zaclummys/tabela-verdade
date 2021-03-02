export default class Source {
    constructor (input) {
        this.offset = 0;
        this.input = input;
    }

    at () {
        return this.offset;
    }

    span (start, end) {
        return this.input.slice(start, end);
    }

    peek () {
        return this.input[this.offset];
    }

    bump () {
        this.offset += 1;
    }
}
