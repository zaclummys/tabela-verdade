import NamesExtractor from '../../../../../src/library/generator/names/extractor';

import {
    NameExpression,
    NotExpression,
    AndExpression,
    ConditionalExpression, OrExpression,
} from '../../../../../src/library/expressions';

describe('Name extractor', () => {
    it('Should extract names from expression', () => {
        const extractor = new NamesExtractor();

        extractor.extract(new ConditionalExpression(
            new AndExpression(
                new NotExpression(
                    new NameExpression('a')
                ),
                new NameExpression('b')
            ),
            new OrExpression(
                new NameExpression('c'),
                new NameExpression('d'),
            ),
        ));

        expect(extractor.getNames()).toEqual(['a', 'b', 'c', 'd']);
    });

    it('Should extract unique names', () => {
        const extractor = new NamesExtractor();

        extractor.extract(new OrExpression(
            new AndExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            ),
            new NameExpression('a')
        ));

        expect(extractor.getNames()).toEqual(['a', 'b']);
    });

    it('Should throw error if expression is null', () => {
        const extractor = new NamesExtractor();

        expect(() =>  extractor.extract(null))
            .toThrowError('Unexpected expression');
    });
});