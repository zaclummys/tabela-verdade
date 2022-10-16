import React from 'react';

import generateTruthTable from '../../library';

import TruthTableContent from './truth-table-content';
import TruthTableContentPlaceholder from './truth-table-content-placeholder';

export default class TruthTable extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            rows: [],
            headers: [],
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

    generateTruthTable () {
        const { expressionValue } = this.props;

        try {
            if (expressionValue.length > 0) {
                const [headers, rows] = generateTruthTable(expressionValue);

                this.setTruthTable(rows, headers);
            } else {
                this.clearTruthTable();
            }

            this.fireValidExpressionValue();
        } catch (error) {
            console.error(error);

            this.fireInvalidExpressionValue();
        }
    }

    clearTruthTable () {
        this.setState({
            rows: [],
            headers: [],
        });
    }

    setTruthTable (rows, headers) {
        this.setState({
            rows,
            headers,
        });
    }

    fireInvalidExpressionValue () {
        this.props.onInvalidExpressionValue();
    }

    fireValidExpressionValue () {
        this.props.onValidExpressionValue();
    }

    render () {
        const { rows, headers } = this.state;

        if (rows.length === 0 && headers.length === 0) {
            return (
                <TruthTableContentPlaceholder />
            );
        } else {
            return (
                <TruthTableContent
                    rows={rows}
                    headers={headers} />
            );
        }
    }
}

