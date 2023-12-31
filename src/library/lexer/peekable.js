export default class PeekableLexer {
    constructor (lexer) {
        this.peeked = null;
        this.lexer = lexer;
    }

    wasPeeked () {
        return this.peeked != null;
    }

    wasNotPeeked () {
        return this.peeked == null;
    }

    isPeekTypeOf (type) {
        const peeked = this.peek();

        return peeked instanceof type;
    }

    peek () {
        if (this.wasNotPeeked()) {
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
        if (this.wasPeeked()) {
            return this.take();
        } else {
            return this.lexer.next();
        }
    }

}
