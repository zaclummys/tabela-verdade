import React from 'react';

export default class OperatorItem extends React.Component {
    fireAddOperator () {
        const {
            operator,
            onAddOperator,
        } = this.props;

        if (onAddOperator) {
            onAddOperator(operator);
        }
    }

    onButtonClick = () => {
        this.fireAddOperator();
    }

    render () {
        const { children } = this.props;

        return (
            <li className="inline">
                <button
                    type="button"
                    className="
                        h-7 w-8
                        font-bold text-white text-center text-sm
                        transition duration-75 ease-out
                        ring-opacity-40 ring-primary hover:ring-2
                        bg-primary active:bg-primary-dark
                        rounded-sm shadow
                    "
                    onClick={this.onButtonClick}>
                    {children}
                </button>
            </li>
        )
    }
}