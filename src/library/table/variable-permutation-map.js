import zip from '../zip';

export default class VariablePermutationMap {
    constructor (variables, permutation) {
        this.map = new Map();

        for (const [variable, value] of zip(variables, permutation)) {
            this.map.set(variable, value);
        }
    }

    get (name) {
        return this.map.get(name);
    }
}