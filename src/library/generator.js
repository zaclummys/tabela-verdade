import Interpreter from './interpreter';

import extractNames from './generator/names/extractor';
import permuteNames from './generator/names/exchanger';

import ExpressionPresenterFactory from './generator/presenter/factory';
import sortExpressions from './generator/expressions/sorter';
import extractExpressions from './generator/expressions/extractor';

export default class Generator {
    constructor (expression) {
        this.expression = expression;
    }

    generateValues (maps, expressions) {
        return maps.map((map) => {
            const interpreter = new Interpreter(map);

            return expressions.map((expression) => interpreter.evaluate(expression));
        });
    }

    generatePresentableExpressions (expressions) {
        const expressionPresenterFactory = new ExpressionPresenterFactory();

        return expressions.
            map((expression) => expressionPresenterFactory.create(expression)).
            map((expression) => expression.present());
    }

    generateMaps () {
        return permuteNames(extractNames(this.expression));
    }

    generateExpressions () {
        return sortExpressions(extractExpressions(this.expression));
    }

    generate () {
        const maps = this.generateMaps();
        const expressions = this.generateExpressions();

        return [
            this.generatePresentableExpressions(expressions),
            this.generateValues(maps, expressions),
        ];
    }
}
