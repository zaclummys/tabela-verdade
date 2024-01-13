import {
    NameExpression,
    NotExpression,
    AndExpression,
    OrExpression,
} from '../../../../../src/library/expressions';

import extractExpressions from '../../../../../src/library/generator/expressions/extractor';

describe('Expression extractor', () => {
    it('Should extract unique expressions', () => {
        const expressions = extractExpressions(new OrExpression(
            new AndExpression(
                new NotExpression(
                    new NameExpression('a'),
                ),
                new NameExpression('b'),
            ),
            new AndExpression(
                new NotExpression(
                    new NameExpression('a'),
                ),
                new NameExpression('b'),
            ),
        ));

        expect(expressions).toStrictEqual([
            new NameExpression('a'),
            new NotExpression(
                new NameExpression('a'),
            ),
            new NameExpression('b'),
            new AndExpression(
                new NotExpression(
                    new NameExpression('a'),
                ),
                new NameExpression('b'),
            ),
            new OrExpression(
                new AndExpression(
                    new NotExpression(
                        new NameExpression('a'),
                    ),
                    new NameExpression('b'),
                ),
                new AndExpression(
                    new NotExpression(
                        new NameExpression('a'),
                    ),
                    new NameExpression('b'),
                ),
            ),
        ]);
    });
});
