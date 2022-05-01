import React from 'react';
import OperatorItem from './operator-item';

export default class WrappingOperatorItem extends React.Component {
    onButtonClick = () => {
        const {
            openingOperator,
            closingOperator,
            fallbackOperator,
            onAddWrappingOperator,
        } = this.props;

        onAddWrappingOperator(openingOperator, closingOperator, fallbackOperator);
    }

    render () {
        const { children } = this.props;

        return (
            <OperatorItem
                onButtonClick={this.onButtonClick}>
                {children}
            </OperatorItem>
        );
    }
}