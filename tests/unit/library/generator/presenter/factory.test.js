import ExpressionPresenterFactory from '~/library/generator/presenter/factory';
import {
    AndExpressionPresenter,
    BiconditionalExpressionPresenter,
    ConditionalExpressionPresenter,
    NameExpressionPresenter,
    NotExpressionPresenter,
    OrExpressionPresenter,
} from '~/library/generator/presenter/implementations';
import {
    AndExpression,
    BiconditionalExpression, BinaryExpression, ConditionalExpression, Expression,
    NameExpression,
    NotExpression,
    OrExpression, UnaryExpression,
} from '~/library/expressions';

export class BadExpression extends Expression {}
export class BadUnaryExpression extends UnaryExpression {}
export class BadBinaryExpression extends BinaryExpression {}


describe('Expression Presenter Factory', () => {
    const factory = new ExpressionPresenterFactory();

    it('Should create name expression presenter', () => {
        const presenter = factory.create(new NameExpression('abc'));

        expect(presenter).toBeInstanceOf(NameExpressionPresenter);
    });

    it('Should create not expression presenter', () => {
        const presenter = factory.create(new NotExpression(
            new NameExpression('abc')
        ));

        expect(presenter).toBeInstanceOf(NotExpressionPresenter);
    });

    it('Should create and expression presenter', () => {
        const presenter = factory.create(new AndExpression(
            new NameExpression('f'),
            new NameExpression('g'),
        ));

        expect(presenter).toBeInstanceOf(AndExpressionPresenter);
    });

    it('Should create or expression presenter', () => {
        const presenter = factory.create(new OrExpression(
            new NameExpression('h'),
            new NameExpression('i'),
        ));

        expect(presenter).toBeInstanceOf(OrExpressionPresenter);
    });

    it('Should create conditional expression presenter', () => {
        const presenter = factory.create(new ConditionalExpression(
            new NameExpression('l'),
            new NameExpression('m'),
        ));

        expect(presenter).toBeInstanceOf(ConditionalExpressionPresenter);
    });

    it('Should create biconditional expression presenter', () => {
        const presenter = factory.create(new BiconditionalExpression(
            new NameExpression('p'),
            new NameExpression('q'),
        ));

        expect(presenter).toBeInstanceOf(BiconditionalExpressionPresenter);
    });

    it('Should throw error if expression is not expected', () => {
        expect(() => factory.create(new BadExpression()))
            .toThrowError('Unexpected expression');
    });

    it('Should throw error if unary expression is not expected', () => {
        expect(() => factory.create(new BadUnaryExpression(
            new NameExpression('x')
        )))
            .toThrowError('Unexpected unary expression');
    });

    it('Should throw error if binary expression is not expected', () => {
        expect(() => factory.create(new BadBinaryExpression(
            new NameExpression('a'),
            new NameExpression('b'),
        )))
            .toThrowError('Unexpected binary expression');
    });
});
