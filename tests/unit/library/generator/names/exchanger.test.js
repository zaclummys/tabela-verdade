import permuteNames from '../../../../../src/library/generator/names/exchanger';

describe('Name exchanger', () => {
    it('Should exchange an empty list of names', () => {
        expect(permuteNames([])).toStrictEqual([]);
    });

    it('Should exchange a list with a variable', () => {
        const maps = permuteNames(['a']);

        expect(maps).toStrictEqual([
            new Map([['a', true]]),
            new Map([['a', false]]),
        ]);
    });

    it('Should exchange a list with two variables', () => {
        const maps = permuteNames(['a', 'b']);

        expect(maps).toStrictEqual([
            new Map([['a', true], ['b', true]]),
            new Map([['a', true], ['b', false]]),
            new Map([['a', false], ['b', true]]),
            new Map([['a', false], ['b', false]]),
        ]);
    });

    it('Should exchange a list with three variables', () => {
        const maps = permuteNames(['a', 'b', 'c']);

        expect(maps).toStrictEqual([
            new Map([['a', true], ['b', true], ['c', true]]),
            new Map([['a', true], ['b', true], ['c', false]]),
            new Map([['a', true], ['b', false], ['c', true]]),
            new Map([['a', true], ['b', false], ['c', false]]),
            new Map([['a', false], ['b', true], ['c', true]]),
            new Map([['a', false], ['b', true], ['c', false]]),
            new Map([['a', false], ['b', false], ['c', true]]),
            new Map([['a', false], ['b', false], ['c', false]]),
        ]);
    });
});
