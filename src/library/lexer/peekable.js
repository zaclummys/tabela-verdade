export default class PeekableLexer {
    constructor (lexer) {
        this.peeked = null;
        this.lexer = lexer;
    }

    peek () {
        if (this.peeked === null) {
            this.peeked = this.lexer.next();
        }

        return this.peeked;
    }

    take () {
        const { peeked } = this;

        this.peeked = null;

        return peeked;
    }

    next () {
        if (this.peeked === null) {
            return this.lexer.next();
        } else {
            return this.take();
        }
    }

}
