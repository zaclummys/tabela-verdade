import ExpressionsSorter from '../../../../../src/library/generator/expressions/sorter';

import {
    NameExpression,
    NotExpression,
    AndExpression,
    OrExpression,
} from '../../../../../src/library/expressions';

describe('Expression sorted', () => {
    it('Should sort expressions', () => {
        const sorter = new ExpressionsSorter();

        expect(sorter.sort([
            new NameExpression('a'),
            new NameExpression('b'),
            new OrExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            ),
            new NameExpression('c'),
            new NotExpression(
                new NameExpression('c')
            ),
            new AndExpression(
                new OrExpression(
                    new NameExpression('a'),
                    new NameExpression('b'),
                ),
                new NotExpression(
                    new NameExpression('c')
                ),
            ),
        ])).toEqual([
            new NameExpression('a'),
            new NameExpression('b'),
            new NameExpression('c'),
            new OrExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            ),
            new NotExpression(
                new NameExpression('c')
            ),
            new AndExpression(
                new OrExpression(
                    new NameExpression('a'),
                    new NameExpression('b'),
                ),
                new NotExpression(
                    new NameExpression('c')
                ),
            ),
        ])
    });
});