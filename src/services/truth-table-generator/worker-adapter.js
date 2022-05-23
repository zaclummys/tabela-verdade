export default class WorkerAdapter {
    constructor (worker) {
        this.worker = worker;
    }

    send (data) {
        this.worker.postMessage(data);
    }

    receive (callback) {
        if (callback == null) {
            this.worker.onmessage = null;
        } else {
            this.worker.onmessage = event => {
                callback(event.data);
            };
        }
    }

    terminate () {
        this.worker.terminate();
    }
}