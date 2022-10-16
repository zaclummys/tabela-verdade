import React from 'react';

import TruthTable from '../truth-table/truth-table';
import TruthTableExpressionForm from '../truth-table-expression-form/truth-table-expression-form';

export default class TruthTableContainer extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            expressionValue: '',
            expressionValueValidity: true,
        };
    }

    setExpressionValue (expressionValue) {
        this.setState({ expressionValue });
    }

    setExpressionValueValidity (expressionValueValidity) {
        this.setState({ expressionValueValidity });
    }

    onExpressionValueChange = (expressionValue) => {
        this.setExpressionValue(expressionValue);
    }

    onValidExpressionValue = () => {
        this.setExpressionValueValidity(true);
    }

    onInvalidExpressionValue = () => {
        this.setExpressionValueValidity(false);
    }

    render () {
        const {
            expressionValue,
            expressionValueValidity,
        } = this.state;
        
        return (
            <div className="my-8">
                <div className="my-6 print:hidden">
                    <TruthTableExpressionForm
                        expressionValue={expressionValue}
                        expressionValueValidity={expressionValueValidity}
                        onExpressionValueChange={this.onExpressionValueChange} />
                </div>

                <div className="table pr-8 my-8 w-full">
                    <TruthTable
                        expressionValue={expressionValue}
                        onValidExpressionValue={this.onValidExpressionValue}
                        onInvalidExpressionValue={this.onInvalidExpressionValue} />
                </div>
            </div>
        )
    }
}