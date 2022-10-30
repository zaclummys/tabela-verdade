function shouldMatchTexts (elements, texts) {
    elements.each((element, index) => {
        cy.wrap(element).should('have.text', texts[index]);
    });
}

describe('Truth table', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8000');
    });

    it('Should display truth table', () => {
        cy.get('input')
            .type('a & b | c');

        const headers = cy.get('table thead th')
            .should('have.length', 5);

        shouldMatchTexts(headers, ['a', 'b', 'c', 'a ∧ b', '(a ∧ b) ∨ c']);

        const cells = cy.get('table tbody td')
            .should('have.length', 40);

        shouldMatchTexts(cells, [
            'V', 'V', 'V', 'V', 'V',
            'V', 'V', 'F', 'V', 'V',
            'V', 'F', 'V', 'F', 'V',
            'V', 'F', 'F', 'F', 'F',
            'F', 'V', 'V', 'F', 'V',
            'F', 'V', 'F', 'F', 'F',
            'F', 'F', 'V', 'F', 'V',
            'F', 'F', 'F', 'F', 'F',
        ]);
    });
});
