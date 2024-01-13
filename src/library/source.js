export default class Source {
    constructor (string) {
        this.offset = 0;
        this.string = string;
    }

    span (startOffset, endOffset) {
        return this.string.slice(startOffset, endOffset);
    }

    peek () {
        return this.string.at(this.offset);
    }

    bump () {
        this.offset += 1;
    }

    takeWhile (fn) {
        const startOffset = this.offset;

        this.skipWhile(fn);

        const endOffset = this.offset;

        return this.span(startOffset, endOffset);
    }

    skipWhile (fn) {
        while (fn(this.peek())) {
            this.bump();
        }
    }
}
