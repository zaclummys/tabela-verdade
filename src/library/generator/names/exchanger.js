/**
 * This class is responsible for create a list of maps with permuted variables from a list of names.
 */
import zip from '../../zip';

function permute (length) {
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
            trueSlice[j] = [
                true,
                ...permutations[j],
            ];

            falseSlice[j] = [
                false,
                ...permutations[j],
            ];
        }

        permutations = [
            ...trueSlice,
            ...falseSlice,
        ];
    }

    return permutations;
}

export default function permuteNames (names) {
    const permutations = permute(names.length);

    return permutations.map((permutation) => {
        const map = new Map();

        for (const [name, value] of zip(names, permutation)) {
            map.set(name, value);
        }

        return map;
    });
}

