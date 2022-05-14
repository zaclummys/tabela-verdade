import WorkerAdapter from './worker-adapter';

export default class AsyncTruthTableGeneratorStrategy {
    static isAvailable () {
        return 'Worker' in window;
    }

    constructor () {
        this.worker = new WorkerAdapter(new Worker(new URL('./async-truth-table-generator-strategy-worker.js', import.meta.url)));
    }

    generate (expression) {
        this.worker.send({ expression });
    }

    onDidGenerate (callback) {
        this.worker.receive(callback);
    }
}