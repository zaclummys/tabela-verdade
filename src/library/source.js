export default class Source {
    constructor (input) {
        this.offset = 0;
        this.input = input;
    }

    span (start, end) {
        return this.input.slice(
            start,
            end
        );
    }

    peek () {
        return this.input[this.offset];
    }

    bump () {
        this.offset += 1;
    }

    takeWhile (f) {
        const start = this.offset;

        this.skipWhile(f);

        const end = this.offset;

        return this.span(
            start,
            end
        );
    }

    skipWhile (f) {
        while (f(this.peek())) {
            this.bump();
        }
    }
}
