export class ExpressionPresenter {
    shouldPresentWithParenthesis () {
        throw new Error('Cannot call a abstract method');
    }
}

export class NameExpressionPresenter extends ExpressionPresenter {
    constructor (name) {
        super();

        this.name = name;
    }

    shouldPresentWithParenthesis () {
        return false;
    }

    present () {
        return this.name;
    }
}

export class UnaryExpressionPresenter extends ExpressionPresenter {
    constructor (inner) {
        super();

        this.inner = inner;
    }

    shouldPresentWithParenthesis () {
        return true;
    }

    presentInner () {
        if (this.inner.shouldPresentWithParenthesis()) {
            return `(${this.inner.present()})`;
        } else {
            return `${this.inner.present()}`;
        }
    }
}

export class NotExpressionPresenter extends UnaryExpressionPresenter {
    present () {
        return `¬ ${this.presentInner()}`;
    }
}

export class BinaryExpressionPresenter extends ExpressionPresenter {
    constructor (left, right) {
        super();

        this.left = left;
        this.right = right;
    }

    shouldPresentWithParenthesis () {
        return true;
    }

    presentLeft () {
        if (this.left.shouldPresentWithParenthesis()) {
            return `(${this.left.present()})`;
        } else {
            return `${this.left.present()}`;
        }
    }

    presentRight () {
        if (this.right.shouldPresentWithParenthesis()) {
            return `(${this.right.present()})`;
        } else {
            return `${this.right.present()}`;
        }
    }
}

export class AndExpressionPresenter extends BinaryExpressionPresenter {
    present () {
        return `${this.presentLeft()} ∧ ${this.presentRight()}`;
    }
}

export class OrExpressionPresenter extends BinaryExpressionPresenter {
    present () {
        return `${this.presentLeft()} ∨ ${this.presentRight()}`;
    }
}

export class ConditionalExpressionPresenter extends BinaryExpressionPresenter {
    present () {
        return `${this.presentLeft()} → ${this.presentRight()}`;
    }
}

export class BiconditionalExpressionPresenter extends BinaryExpressionPresenter {
    present () {
        return `${this.presentLeft()} ↔ ${this.presentRight()}`;
    }
}
