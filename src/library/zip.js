class Zip {
    constructor (iterableA, iterableB) {
        this.iteratorA = iterableA[Symbol.iterator]();
        this.iteratorB = iterableB[Symbol.iterator]();
    }

    next () {
        const nextA = this.iteratorA.next();
        const nextB = this.iteratorB.next();

        return {
            done: nextA.done || nextB.done,
            value: [
                nextA.value,
                nextB.value,
            ],
        };
    }

    [Symbol.iterator] () {
        return this;
    }
}

export default function zip (iterableA, iterableB) {
    return new Zip(iterableA, iterableB);
}
