import Source from '../../../src/library/source';

describe('Source', () => {
    it('Should create a string span at specified range', () => {
        const source = new Source('abcdefg');

        expect(source.span(2, 4)).toBe('cd');
    });

    it('Should peek character without being bumped', () => {
        const source = new Source('xy');

        expect(source.peek()).toBe('x');
    });

    it('Should peek character after being bumped', () => {
        const source = new Source('hi');

        source.bump();

        expect(source.peek()).toBe('i');
    });

    it('Should take while character is `a`', () => {
        const source = new Source('aaaabbbb');

        expect(source.takeWhile(ch => {
            return ch === 'a';
        })).toBe('aaaa');
    });

    it('Should skip while character is `w`', () => {
        const source = new Source('wwwxyz');

        source.skipWhile(ch => {
            return ch === 'w';
        });

        expect(source.peek()).toBe('x');
    });
})
