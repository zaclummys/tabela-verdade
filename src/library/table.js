import Interpreter from './interpreter';
import VariablePermutationMapGenerator from './table/variable-permutation-map-generator';

export default class Table {
    constructor (variables, expressions) {
        this.variables = variables;
        this.expressions = expressions;
    }

    *generate () {
        const variables = this.variables;
        const expressions = this.expressions;

        const generator = new VariablePermutationMapGenerator(variables);

        for (const map of generator.generate()) {
            const interpreter = new Interpreter(map);

            yield interpreter.evaluateMany(expressions);
        }
    }
}
