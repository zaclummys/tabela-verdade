export default class Expression {
    isEqual () {
        throw new Error('equals was not implemented in child class');
    }

    isLike () {
        throw new Error('isLike was not implemented in child class');
    }

    present () {
        throw new Error('present was not implemented in child class');
    }

    shouldPresentWithoutParenthesis () {
        throw new Error('shouldPresentWithoutParenthesis was not implemented in child class');
    }

    precedence () {
        throw new Error('precedence was not implemented in child class');
    }
}