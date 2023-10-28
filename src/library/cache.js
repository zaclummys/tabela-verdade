export default class Cache {
    constructor () {
        this.map = new Map();
    }

    getOrInsertWith (string, fn) {
        if (!this.map.has(string)) {
            this.map.set(string, fn());
        }

        return this.map.get(string);
    }
}
