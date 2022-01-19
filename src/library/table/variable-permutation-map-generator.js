import VariablePermutationMap from './variable-permutation-map';

export default class VariablePermutationMapGenerator {
    constructor (variables) {
        this.variables = variables;
    }

    permute () {
        const length = this.variables.length;

        if (length < 1) {
            return [];
        }

        let permutations = [
            [true],
            [false],
        ];

        for (let i = 1; i < length; i++) {
            const trueSlice = [];
            const falseSlice = [];

            for (let j = 0; j < permutations.length; j++) {
                trueSlice[j] = [true, ...permutations[j]];
                falseSlice[j] = [false, ...permutations[j]];
            }

            permutations = [
                ...trueSlice,
                ...falseSlice,
            ];
        }

        return permutations;
    }

    *generate () {
        const variables = this.variables;

        for (const permutation of this.permute()) {
            yield new VariablePermutationMap(variables, permutation);
        }
    }
}