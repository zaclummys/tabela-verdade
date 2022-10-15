/**
 * This class is responsible for create a list of maps with permuted variables from a list of names.
 */

export default class NamesExchanger {
    createListOfPermutations (length) {
        if (length === 0) {
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

    createMapWithPermutedVariables (names, permutation) {
        const mapWithPermutedVariables = {};

        for (let index = 0; index < permutation.length && index < names.length; index++) {
            mapWithPermutedVariables[names[index]] = permutation[index];
        }

        return mapWithPermutedVariables;
    }

    exchange (names) {
        return this.createListOfPermutations(names.length)
            .map(permutation => this.createMapWithPermutedVariables(names, permutation));
    }
}