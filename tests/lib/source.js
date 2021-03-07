import assert from 'assert';
import Source from '../../src/lib/source.js';

describe('Source', function () {
    it('should start at zero', function () {
        const source = new Source('abcdef');

        assert.strictEqual(source.at(), 0);
    });

    it('should peek() be the first character', function () {
        const source = new Source('abcdef');

        assert.strictEqual(source.peek(), 'a');
    });

    it('should bump() skip the first character', function () {
        const source = new Source('abcdef');

        source.bump();

        assert.strictEqual(source.at(), 1);
    });

    it('should peek() be the character in the current offset', function () {
        const source = new Source('abcdef');

        assert.strictEqual(source.peek(), 'a');
        source.bump();
        assert.strictEqual(source.peek(), 'b');
        source.bump();
        assert.strictEqual(source.peek(), 'c');
        source.bump();
        assert.strictEqual(source.peek(), 'd');
        source.bump();
        assert.strictEqual(source.peek(), 'e');
        source.bump();
        assert.strictEqual(source.peek(), 'f');
    });

    it('should at() be equal to the string length when string was bumped completely', function () {
        const source = new Source('abcdef');

        source.bump();
        source.bump();
        source.bump();
        source.bump();
        source.bump();
        source.bump();

        assert.strictEqual(source.at(), 'abcdef'.length);
    });

    it('should peek() be equal to undefined when string was bumped completely', function () {
        const source = new Source('abcdef');

        source.bump();
        source.bump();
        source.bump();
        source.bump();
        source.bump();
        source.bump();

        assert.strictEqual(source.peek(), undefined);
    });
});