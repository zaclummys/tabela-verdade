import ExpressionPresenterFactory from '../../../../../src/library/generator/presenter/factory';

import {
    NameExpression,
    NotExpression,
    AndExpression,
    OrExpression,
    ConditionalExpression,
    BiconditionalExpression,
} from '../../../../../src/library/expressions';

import {
    NameExpressionPresenter,
    NotExpressionPresenter,
    AndExpressionPresenter,
    OrExpressionPresenter,
    ConditionalExpressionPresenter,
    BiconditionalExpressionPresenter,
} from '../../../../../src/library/generator/presenter/implementations';

import {
    BadExpression,
    BadUnaryExpression,
    BadBinaryExpression,
} from '../../../../stubs/expressions';

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