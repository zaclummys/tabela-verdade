import {
    ExpressionPresenter,
    NameExpressionPresenter,
    NotExpressionPresenter,
    AndExpressionPresenter,
    OrExpressionPresenter,
    ConditionalExpressionPresenter,
    BiconditionalExpressionPresenter,
} from '../../../../../src/library/generator/presenter/implementations';

describe('Expression Presenter Implementations', () => {
    it('Cannot call shouldPresentWithParenthesis without override it', () => {
        const presenter = new ExpressionPresenter();

        expect(() => presenter.shouldPresentWithParenthesis())
            .toThrowError('Cannot call a abstract method');
    });

    it('Should present name expression', () => {
        const presenter = new NameExpressionPresenter('abc');

        expect(presenter.present()).toEqual('abc');
    });

    it('Should present not expression', () => {
        const presenter = new NotExpressionPresenter(
            new NameExpressionPresenter('abc')
        );

        expect(presenter.present()).toEqual('¬ abc');
    });

    it('Should present not expression with parenthesis around inner expression', () => {
        const presenter = new NotExpressionPresenter(
            new NotExpressionPresenter(
                new NameExpressionPresenter('xyz')
            )
        );

        expect(presenter.present()).toEqual('¬ (¬ xyz)');
    });

    it('Should present and expression', () => {
        const presenter = new AndExpressionPresenter(
            new NameExpressionPresenter('f'),
            new NameExpressionPresenter('g'),
        );

        expect(presenter.present()).toEqual('f ∧ g');
    });

    it('Should present and expression with parenthesis around both expressions', () => {
        const presenter = new AndExpressionPresenter(
            new NotExpressionPresenter(
                new NameExpressionPresenter('f'),
            ),
            new NotExpressionPresenter(
                new NameExpressionPresenter('g'),
            )
        );

        expect(presenter.present()).toEqual('(¬ f) ∧ (¬ g)');
    });

    it('Should present or expression', () => {
        const presenter = new OrExpressionPresenter(
            new NameExpressionPresenter('h'),
            new NameExpressionPresenter('i'),
        );

        expect(presenter.present()).toEqual('h ∨ i');
    });

    it('Should present or expression with parenthesis around both expressions', () => {
        const presenter = new OrExpressionPresenter(
            new NotExpressionPresenter(
                new NameExpressionPresenter('j'),
            ),
            new NotExpressionPresenter(
                new NameExpressionPresenter('k'),
            )
        );

        expect(presenter.present()).toEqual('(¬ j) ∨ (¬ k)');
    });

    it('Should present conditional expression', () => {
        const presenter = new ConditionalExpressionPresenter(
            new NameExpressionPresenter('l'),
            new NameExpressionPresenter('m'),
        );

        expect(presenter.present()).toEqual('l → m');
    });

    it('Should present conditional expression with parenthesis around both expressions', () => {
        const presenter = new ConditionalExpressionPresenter(
            new NotExpressionPresenter(
                new NameExpressionPresenter('n')
            ),
            new NotExpressionPresenter(
                new NameExpressionPresenter('o')
            ),
        );

        expect(presenter.present()).toEqual('(¬ n) → (¬ o)');
    });

    it('Should present biconditional expression', () => {
        const presenter = new BiconditionalExpressionPresenter(
            new NameExpressionPresenter('p'),
            new NameExpressionPresenter('q'),
        );

        expect(presenter.present()).toEqual('p ↔ q');
    });

    it('Should present biconditional expression with parenthesis around both expressions', () => {
        const presenter = new BiconditionalExpressionPresenter(
            new NotExpressionPresenter(
                new NameExpressionPresenter('p')
            ),
            new NotExpressionPresenter(
                new NameExpressionPresenter('q')
            ),
        );

        expect(presenter.present()).toEqual('(¬ p) ↔ (¬ q)');
    });
});