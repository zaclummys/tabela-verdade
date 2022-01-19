export default function* zip (arrayA, arrayB) {
    const aLength = arrayA.length;
    const bLength = arrayB.length;

    for (let i = 0; i < aLength || i < bLength; i++) {
        yield [arrayA[i], arrayB[i]];
    }
}