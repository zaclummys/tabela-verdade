export default class VariableSet {
    constructor () {
        this.variables = [];
    }

    has (variableToBeCompared) {
        return this.variables.some(variable => {
            return variable === variableToBeCompared;
        });
    }

    add (variableToBeAdded) {
        if (!this.has(variableToBeAdded)) {
            this.variables.push(variableToBeAdded);
        }
    }

    asArray () {
        return this.variables;
    }
}