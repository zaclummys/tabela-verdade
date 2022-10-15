import React from 'react';

import generateTruthTable from '../../library';

import TruthTableView from './truth-table-view';

export default class TruthTable extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            rows: [],
            expressions: [],
        };
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        const currProps = this.props;

        const currExpressionValue = currProps.expressionValue;
        const prevExpressionValue = prevProps.expressionValue;

        if (currExpressionValue !== prevExpressionValue) {
            this.generateTruthTable();
        }
    }

    isExpressionValueEmpty () {
        return this.props.expressionValue.length === 0;
    }

    generateTruthTable () {
        const { expressionValue } = this.props;

        try {
            if (this.isExpressionValueEmpty()) {
                this.clearTruthTable();
            } else {
                const [expressions, rows] = generateTruthTable(expressionValue);

                this.setTruthTable(rows, expressions);
            }

            this.fireInvalidExpressionValue(false);
        } catch (error) {
            console.error(error);

            this.fireInvalidExpressionValue(true);
        }
    }

    hasRows () {
        return this.state.rows.length > 0;
    }

    hasExpressions () {
        return this.state.expressions.length > 0;
    }

    shouldClearTruthTable () {
        return this.hasRows() || this.hasExpressions();
    }

    clearTruthTable () {
        if (this.shouldClearTruthTable()) {
            this.setState({
                rows: [],
                expressions: [],
            });
        }
    }

    setTruthTable (rows, expressions) {
        this.setState({
            rows,
            expressions,
        });
    }

    fireInvalidExpressionValue (error) {
        const { onInvalidExpressionValue } = this.props;

        if (onInvalidExpressionValue) {
            onInvalidExpressionValue(error);
        }
    }

    render () {
        const {
            rows,
            expressions,
        } = this.state;

        return (
            <TruthTableView
                rows={rows}
                expressions={expressions} />
        );
    }
}

