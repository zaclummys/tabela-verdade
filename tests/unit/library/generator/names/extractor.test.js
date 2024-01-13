import extractNames from '../../../../../src/library/generator/names/extractor';

import {
    NameExpression,
    AndExpression,
    OrExpression, NotExpression,
} from '../../../../../src/library/expressions';

describe('Name extractor', () => {
    it('Should extract names from expression', () => {
        const names = extractNames(new OrExpression(
            new AndExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            ),
            new NotExpression(
                new AndExpression(
                    new NameExpression('a'),
                    new NameExpression('c'),
                ),
            )
        ));

        expect(names).toStrictEqual(['a', 'b', 'c']);
    });

    it('Should not extract names from null', () => {
        expect(() =>  extractNames(null))
            .toThrowError('Unexpected expression');
    });
});
