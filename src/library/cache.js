export default class Cache {
    constructor () {
        this.map = new Map();
    }

    getOrInsertWith (string, f) {
        if (!this.map.has(string)) {
            this.map.set(string, f());
        }

        return this.map.get(string);
    }
}
