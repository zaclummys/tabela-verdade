import Interpreter from './interpreter';

import NamesExtractor from './generator/names/extractor';
import NamesExchanger from './generator/names/exchanger';

import ExpressionsExtractor from './generator/expressions/extractor';
import ExpressionsSorter from './generator/expressions/sorter';

import ExpressionPresenterFactory from './generator/presenter/factory';

export default class Generator {
    constructor (parser) {
        this.parser = parser;
    }

    prepareNames (expression) {
        const extractor = new NamesExtractor();

        extractor.extract(expression);

        const exchanger = new NamesExchanger();

        return exchanger.exchange(extractor.getNames());
    }

    prepareExpressions (expression) {
        const extractor = new ExpressionsExtractor();

        extractor.extract(expression);

        const sorter = new ExpressionsSorter();

        return sorter.sort(extractor.getExpressions());
    }

    generateValues (mapsWithPermutedVariables, expressions) {
        return mapsWithPermutedVariables.map((mapWithPermutedVariables) => {
            const interpreter = new Interpreter(mapWithPermutedVariables);

            return expressions.map((expression) => interpreter.evaluate(expression));
        });
    }

    generatePresentableExpressions (expressions) {
        const expressionPresenterFactory = new ExpressionPresenterFactory();

        return expressions.
            map((expression) => expressionPresenterFactory.create(expression)).
            map((expression) => expression.present());
    }

    generate () {
        const expression = this.parser.parse();

        const mapsWithPermutedVariables = this.prepareNames(expression);
        const expressions = this.prepareExpressions(expression);

        return [
            this.generatePresentableExpressions(expressions),
            this.generateValues(
                mapsWithPermutedVariables,
                expressions
            ),
        ];
    }
}
