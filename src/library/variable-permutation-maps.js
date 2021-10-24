export default class VariablePermutationMaps {
    constructor (variables) {
        this.variables = variables;
    }

    generate () {
        const variables = this.variables;

        const generatedMapList = [];

        const permutations = permute(variables.length);

        for (let i = 0; i < permutations.length; i++) {
            const generatedMap = new Map();

            for (let j = 0; j < variables.length; j++) {
                generatedMap.set(variables[j], permutations[i][j]);
            }

            generatedMapList.push(generatedMap);
        }

        return generatedMapList;
    }
}

function permute (length) {
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
