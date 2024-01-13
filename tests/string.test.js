import {
    replaceSelectionWithOperator,
    wrapSelectionWithOperators,
} from '~/string';

describe('String', () => {
    describe('Replace selection with operator', () => {
        describe('Without selection', () => {
            it('Should insert operator in the start', () => {
                const output = replaceSelectionWithOperator({
                    string: 'lorem',
                    selectionStart: 0,
                    selectionEnd: 0,
                    operator: '-',
                });

                expect(output).toBe('-lorem');
            });

            it('Should insert operator in the middle', () => {
                const output = replaceSelectionWithOperator({
                    string: 'abcdef',
                    selectionStart: 3,
                    selectionEnd: 3,
                    operator: '*',
                });

                expect(output).toBe('abc*def');
            });

            it('Should insert operator  in the end', () => {
                const output = replaceSelectionWithOperator({
                    string: 'ipsum',
                    selectionStart: 5,
                    selectionEnd: 5,
                    operator: '-',
                });

                expect(output).toBe('ipsum-');
            });

            it('Should insert multi-character operator', () => {
                const output = replaceSelectionWithOperator({
                    string: '1234',
                    selectionStart: 2,
                    selectionEnd: 2,
                    operator: '==',
                });

                expect(output).toBe('12==34');
            });
        });

        describe('With selection', () => {
            it('Should replace selection in the start', () => {
                const output = replaceSelectionWithOperator({
                    string: 'lorem',
                    selectionStart: 0,
                    selectionEnd: 3,
                    operator: '-',
                });

                expect(output).toBe('-em');
            });

            it('Should replace selection in the middle', () => {
                const output = replaceSelectionWithOperator({
                    string: 'abcdef',
                    selectionStart: 2,
                    selectionEnd: 4,
                    operator: '*',
                });

                expect(output).toBe('ab*ef');
            });

            it('Should replace selection in the end', () => {
                const output = replaceSelectionWithOperator({
                    string: 'ipsum',
                    selectionStart: 3,
                    selectionEnd: 5,
                    operator: '-',
                });

                expect(output).toBe('ips-');
            });

            it('Should replace selection using multi-character operator', () => {
                const output = replaceSelectionWithOperator({
                    string: '123456',
                    selectionStart: 2,
                    selectionEnd: 4,
                    operator: '!=',
                });

                expect(output).toBe('12!=56');
            });
        });
    });

    describe('Wrap selection with operators', () => {
        describe('With selection', () => {
            it('Should wrap the whole string with operators', () => {
                const output = wrapSelectionWithOperators({
                    string: 'abcdef',
                    selectionStart: 0,
                    selectionEnd: 6,
                    openingOperator: '(',
                    closingOperator: ')',
                });

                expect(output).toBe('(abcdef)');
            });

            it('Should wrap part of the string with operators', () => {
                const output = wrapSelectionWithOperators({
                    string: 'abcdef',
                    selectionStart: 2,
                    selectionEnd: 4,
                    openingOperator: '(',
                    closingOperator: ')',
                });

                expect(output).toBe('ab(cd)ef');
            });
        });

        describe('Without selection', () => {
            it('Should insert operators in the start', () => {
                const output = wrapSelectionWithOperators({
                    string: 'abcdef',
                    selectionStart: 0,
                    selectionEnd: 0,
                    openingOperator: '(',
                    closingOperator: ')',
                });

                expect(output).toBe('()abcdef');
            });

            it('Should insert operators in the middle', () => {
                const output = wrapSelectionWithOperators({
                    string: 'abcdef',
                    selectionStart: 3,
                    selectionEnd: 3,
                    openingOperator: '(',
                    closingOperator: ')',
                });

                expect(output).toBe('abc()def');
            });

            it('Should insert operators in the end', () => {
                const output = wrapSelectionWithOperators({
                    string: 'abcdef',
                    selectionStart: 6,
                    selectionEnd: 6,
                    openingOperator: '(',
                    closingOperator: ')',
                });

                expect(output).toBe('abcdef()');
            });
        });
    });
});
