import React from 'react';

import generate from '../../library';
import { TruthTableRow } from './truth-table-row';
import { TruthTableHeader } from './truth-table-header';
import TruthTablePlaceholder from './truth-table-placeholder';

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
            const shouldGenerateTruthTable = expressionValue.length > 0;

            if (shouldGenerateTruthTable) {
                const {
                    rows,
                    expressions,
                } = generate(expressionValue);

                this.setTruthTable(rows, expressions);
            } else {
                this.clearTruthTable();
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

    shouldRenderPlaceholder () {
        const {
            rows,
            expressions,
        } = this.state;

        return rows.length === 0 && expressions.length === 0;
    }

    render () {
        const {
            rows,
            expressions,
        } = this.state;

        if (this.shouldRenderPlaceholder()) {
            return (
                <TruthTablePlaceholder />
            );
        }

        return (
            <table
                className="group mx-auto table-auto ring-2 ring-primary rounded-sm cursor-default transition-shadow hover:ring-primary-dark shadow-md">
                <thead
                    className="bg-primary text-white border-b-2 border-primary group-hover:border-primary-dark">
                    <tr>
                        <TruthTableHeaderList
                            expressions={expressions} />
                    </tr>
                </thead>

                <tbody>
                    <TruthTableRowList
                        rows={rows} />
                </tbody>
            </table>
        );
    }
}

function TruthTableHeaderList ({ expressions }) {
    return expressions.map(expression => (
        <TruthTableHeader expression={expression} />
    ));
}

function TruthTableRowList ({ rows }) {
    return rows.map(values => (
        <TruthTableRow values={values} />
    ));
}