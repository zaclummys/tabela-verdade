import {
    NameExpression,
    UnaryExpression,
    BinaryExpression,
} from '../../expressions';

/**
 * This is responsible for extract the names from a root expression.
 */

export default function extractNames (expression) {
    const names = [];

    const stack = [expression];

    while (stack.length > 0) {
        const expression = stack.pop();

        if (expression instanceof NameExpression) {
            const name = expression.getName();

            if (!names.includes(name)) {
                names.push(name);
            }
        } else if (expression instanceof UnaryExpression) {
            stack.push(expression.getInner());
        } else if (expression instanceof BinaryExpression) {
            stack.push(expression.getRight());
            stack.push(expression.getLeft());
        } else {
            throw new Error('Unexpected expression');
        }
    }

    return names;
}
