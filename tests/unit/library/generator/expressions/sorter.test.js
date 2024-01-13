import ExpressionsSorter from '../../../../../src/library/generator/expressions/sorter';

import {
    NameExpression,
    NotExpression,
    AndExpression,
    OrExpression,
} from '../../../../../src/library/expressions';
import sortExpressions from '../../../../../src/library/generator/expressions/sorter';

describe('Expression sorted', () => {
    it('Should sort expressions', () => {
        expect(sortExpressions([
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
        ])).toStrictEqual([
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
