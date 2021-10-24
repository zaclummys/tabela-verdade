import React from 'react';

import TruthTable from '../truth-table/truth-table';
import TruthTableExpressionForm from '../truth-table-expression-form/truth-table-expression-form';

export default class TruthTableContainer extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            expressionValue: '',
            expressionValueIsInvalid: false,
        };
    }

    setExpressionValue (expressionValue) {
        this.setState({ expressionValue });
    }

    setExpressionValueIsInvalid (expressionValueIsInvalid) {
        this.setState({ expressionValueIsInvalid });
    }

    onExpressionValueChange = (expressionValue) => {
        this.setExpressionValue(expressionValue);
    }

    onInvalidExpressionValue = (invalid) => {
        this.setExpressionValueIsInvalid(invalid);
    }

    render () {
        const {
            expressionValue,
            expressionValueIsInvalid,
        } = this.state;
        
        return (
            <div>
                <TruthTableExpressionForm
                    expressionValue={expressionValue}
                    expressionValueIsInvalid={expressionValueIsInvalid}
                    onExpressionValueChange={this.onExpressionValueChange} />

                <div className="table pr-8 w-full">
                    <TruthTable
                        expressionValue={expressionValue}
                        onInvalidExpressionValue={this.onInvalidExpressionValue} />
                </div>
            </div>
        )
    }
}