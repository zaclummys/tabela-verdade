import {
    Identifier,

    NotExpression,
    OrExpression,
    AndExpression,

    ImplicationExpression,
    EquivalenceExpression,
} from './expressions';

import VariableSet from './compiler/variable-set';
import ExpressionSet from './compiler/expression-set';

import { compareExpressionPrecedences } from './compiler/precedence';

export default class Compiler {
    constructor () {
        this.variables = new VariableSet();
        this.expressions = new ExpressionSet();
    }

    getVariables () {
        return this.variables.asArray();
    }

    getExpressions () {
        return this.expressions.asArray()
            .slice()
            .sort(compareExpressionPrecedences);
    }

    storeVariable (variable) {
        this.variables.add(variable);
    }

    storeExpression (expression) {
        this.expressions.add(expression);
    }

    compile (expression) {
        if (expression instanceof Identifier) {
            this.storeVariable(expression.name);
        }
        else if (expression instanceof NotExpression) {
            this.compile(expression.inner);
        }
        else if (expression instanceof AndExpression) {
            this.compile(expression.left);
            this.compile(expression.right);
        }
        else if (expression instanceof OrExpression) {
            this.compile(expression.left);
            this.compile(expression.right);
        }
        else if (expression instanceof ImplicationExpression) {
            this.compile(expression.left);
            this.compile(expression.right);
        }
        else if (expression instanceof EquivalenceExpression) {
            this.compile(expression.left);
            this.compile(expression.right);
        }

        this.storeExpression(expression);
    }
}