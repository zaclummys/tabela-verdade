import SyncTruthTableGeneratorStrategy from './sync-truth-table-generator-strategy';
import AsyncTruthTableGeneratorStrategy from './async-truth-table-generator-strategy';

export default class TruthTableGenerator {
    constructor () {
        if (AsyncTruthTableGeneratorStrategy.isAvailable()) {
            this.generator = new AsyncTruthTableGeneratorStrategy();
        } else {
            this.generator = new SyncTruthTableGeneratorStrategy();
        }
    }

    generate (expression) {
        this.generator.generate(expression);
    }

    onDidGenerate (callback) {
        this.generator.onDidGenerate(callback);
    }

    terminate () {
        if (this.generator.shouldBeTerminated()) {
            this.generator.terminate()
        }
    }
}