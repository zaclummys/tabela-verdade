import Generator from '~/library/generator';

import {
    AndExpression,
    NameExpression,
    ConditionalExpression,
} from '~/library/expressions';

describe('Generator', () => {
    it('Should generate maps', () => {
        const generator = new Generator(
            new ConditionalExpression(
                new AndExpression(
                    new NameExpression('a'),
                    new NameExpression('b'),
                ),
                new NameExpression('c'),
            )
        );

        expect(generator.generateMaps()).toEqual([
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

    // it('Should generate table', () => {
    //     const generator = new Generator(
    //         new ConditionalExpression(
    //             new AndExpression(
    //                 new NameExpression('a'),
    //                 new NameExpression('b'),
    //             ),
    //             new NameExpression('c'),
    //         )
    //     );
    //
    //     expect(generator.generate()).toStrictEqual([
    //         ['a', 'b', 'c', 'a ∧ b', '(a ∧ b) → c'],
    //         [
    //             [true, true, true, true, true],
    //             [true, true, false, true, false],
    //             [true, false, true, false, true],
    //             [true, false, false, false, true],
    //             [false, true, true, false, true],
    //             [false, true, false, false, true],
    //             [false, false, true, false, true],
    //             [false, false, false, false, true]
    //         ]
    //     ]);
    // });
})
