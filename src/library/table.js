import Interpreter from './interpreter';

import TableResult from './table/result';
import VariablePermutationMaps from './variable-permutation-maps';

export default class Table {
    constructor (variables, expressions) {
        this.variables = variables;
        this.expressions = expressions;
    }

    generate () {
        return new TableResult(
            this.generateRows(),
            this.expressions,
        );
    }

    generateRows () {
        const permutations = new VariablePermutationMaps(
            this.variables
        );

        const rows = [];

        for (const permutation of permutations.generate()) {
            const interpreter = new Interpreter(permutation);

            const values = [];

            for (const expression of this.expressions) {
                values.push(interpreter.evaluate(expression));
            }

            rows.push(values);
        }

        return rows;
    }
}
