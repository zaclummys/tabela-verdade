import {
    NameExpression,
    UnaryExpression,
    BinaryExpression,
} from '../../expressions';

/**
 * This is responsible for extract the names and sub-expressions from a root expression.
 */

export default class NamesExtractor {
    constructor () {
        this.names = [];
    }

    extract (expression) {
        if (expression instanceof NameExpression) {
            this.addName(expression.getName());
        } else if (expression instanceof UnaryExpression) {
            this.extract(expression.getInner());
        } else if (expression instanceof BinaryExpression) {
            this.extract(expression.getLeft());
            this.extract(expression.getRight());
        } else {
            throw new Error('Unexpected expression');
        }
    }

    hasName (name) {
        return this.names.includes(name);
    }

    addName (name) {
        if (!this.hasName(name)) {
            this.names.push(name);
        }
    }

    getNames () {
        return this.names;
    }
}
