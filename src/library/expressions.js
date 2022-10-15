export class Expression {
    isEqual () {
        throw new Error('Cannot call a abstract method');
    }
}

export class UnaryExpression extends Expression {
    constructor (inner) {
        super();

        this.inner = inner;
    }

    getInner () {
        return this.inner;
    }
}

export class BinaryExpression extends Expression {
    constructor (left, right) {
        super();

        this.left = left;
        this.right = right;
    }

    getLeft () {
        return this.left;
    }

    getRight () {
        return this.right;
    }
}

export class NameExpression extends Expression {
    constructor (name) {
        super();

        this.name = name;
    }

    getName () {
        return this.name;
    }

    isEqual (other) {
        return other instanceof NameExpression && this.name === other.name;
    }
}

export class NotExpression extends UnaryExpression {
    isEqual (other) {
        return other instanceof NotExpression && this.inner.isEqual(other.inner);
    }
}

export class AndExpression extends BinaryExpression {
    isEqual (other) {
        return other instanceof AndExpression
            && this.left.isEqual(other.left)
            && this.right.isEqual(other.right);
    }
}

export class OrExpression extends BinaryExpression {
    isEqual (other) {
        return other instanceof OrExpression
            && this.left.isEqual(other.left)
            && this.right.isEqual(other.right);
    }
}

export class ConditionalExpression extends BinaryExpression {
    isEqual (other) {
        return other instanceof ConditionalExpression
            && this.left.isEqual(other.left)
            && this.right.isEqual(other.right);
    }
}

export class BiconditionalExpression extends BinaryExpression {
    isEqual (other) {
        return other instanceof BiconditionalExpression
            && this.left.isEqual(other.left)
            && this.right.isEqual(other.right);
    }
}
