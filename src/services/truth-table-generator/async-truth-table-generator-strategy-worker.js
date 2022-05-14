import generateTruthTable from '../../library';

self.addEventListener('message', event => {
    const { expression } = event.data;

    const data = generateTruthTable(expression);

    self.postMessage(data);
});