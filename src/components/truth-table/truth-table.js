import React from 'react';

import generateTruthTable from '../../library';

import TruthTableView from './truth-table-view';

export default class TruthTable extends React.Component {
    constructor (props) {
        super(props);

        this.schedulingTruthTableGeneration = null;

        this.state = {
            rows: [],
            expressions: [],
        };
    }

    componentDidMount () {
        this.scheduleTruthTableGeneration();
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        const currProps = this.props;

        const currExpressionValue = currProps.expressionValue;
        const prevExpressionValue = prevProps.expressionValue;

        if (currExpressionValue !== prevExpressionValue) {
            this.scheduleTruthTableGeneration();
        }
    }

    isExpressionValueEmpty () {
        return this.props.expressionValue.length === 0;
    }

    scheduleTruthTableGeneration () {
        if (this.schedulingTruthTableGeneration) {
            clearTimeout(this.schedulingTruthTableGeneration);
        }

        this.schedulingTruthTableGeneration = setTimeout(() => {
            this.generateTruthTable();
        }, 16);
    }

    generateTruthTable () {
        const { expressionValue } = this.props;

        try {
            if (this.isExpressionValueEmpty()) {
                this.clearTruthTable();
            } else {
                const {
                    rows,
                    expressions,
                } = generateTruthTable(expressionValue);

                this.setTruthTable(rows, expressions);
            }

            this.fireInvalidExpressionValue(false);
        } catch {
            this.fireInvalidExpressionValue(true);
        }
    }

    clearTruthTable () {
        this.setState({
            rows: [],
            expressions: [],
        });
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

