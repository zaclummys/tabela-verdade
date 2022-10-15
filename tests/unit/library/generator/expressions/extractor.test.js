import ExpressionsExtractor from '../../../../../src/library/generator/expressions/extractor';

import {
    NameExpression,
    NotExpression,
    AndExpression,
    OrExpression,
} from '../../../../../src/library/expressions';

describe('Expression extractor', () => {
    it('Should extract unique expressions', () => {
        const extractor = new ExpressionsExtractor();

        extractor.extract(new OrExpression(
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

        expect(extractor.getExpressions()).toEqual([
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