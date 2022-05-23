import generateTruthTable from '../../library';

export default class SyncTruthTableGeneratorStrategy {
    constructor () {
        this.callback = null;
    }

    generate (expression) {
        const data = generateTruthTable(expression);

        this.callback(data);
    }

    onDidGenerate (callback) {
        this.callback = callback;
    }

    shouldBeTerminated () {
        return false;
    }
}