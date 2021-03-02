import {
    Identifier,

    NotExpression,
    OrExpression,
    AndExpression,

    ImplicationExpression,
    EquivalenceExpression,
} from './expressions';

export default class Interpreter {
    constructor (names, expressions) {
        const permutations = [];

        for (let i = 0; i < (1 << names.length); i += 1) {
            const values = {};

            for (let j = 0; j < names.length; j += 1) {
                if (i & (2 ** j)) {
                    values[names[j]] = true;
                }
                else {
                    values[names[j]] = false;
                }
            }

            permutations.push(values);
        }

        this.expressions = expressions;
        this.permutations = permutations;

        this.matrix = [];
    }

    interpret () {
        this.matrix = this.permutations.map(values => {
            return this.expressions.map(expression => {
                return this.eval(values, expression);
            });
        });
    }

    eval (values, expression) {
        if (expression instanceof Identifier) {
            return values[expression.name];
        }

        if (expression instanceof NotExpression) {
            return !this.eval(values, expression.inner);
        }

        if (expression instanceof AndExpression) {
            const left = this.eval(values, expression.left);
            const right = this.eval(values, expression.right);

            return left && right;
        }

        if (expression instanceof OrExpression) {
            const left = this.eval(values, expression.left);
            const right = this.eval(values, expression.right);

            return left || right;
        }

        if (expression instanceof ImplicationExpression) {
            const left = this.eval(values, expression.left);
            const right = this.eval(values, expression.right);

            return !left || right;
        }

        if (expression instanceof EquivalenceExpression) {
            const left = this.eval(values, expression.left);
            const right = this.eval(values, expression.right);

            return (left && right) || (!left && !right);
        }

        throw new Error('Unexpected expression');
    }
}
