import React from 'react';

import { truthTableGenerator } from '../../container';

import TruthTableView from './truth-table-view';

export default class TruthTable extends React.Component {
    constructor (props) {
        super(props);

        this.generator = truthTableGenerator;

        this.state = {
            rows: [],
            expressions: [],
        };
    }

    componentDidMount () {
        this.generator.onDidGenerate(data => {
            this.setTruthTable(data.rows, data.expressions);
        });
    }

    componentWillUnmount () {
        this.generator.onDidGenerate(null);
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
                this.generator.generate(expressionValue);
            }

            this.fireInvalidExpressionValue(false);
        } catch {
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

