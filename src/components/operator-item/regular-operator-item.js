import React from 'react';
import OperatorItem from './operator-item';

export default class RegularOperatorItem extends React.Component {
    onButtonClick = () => {
        const {
            operator,
            onAddRegularOperator,
        } = this.props;

        onAddRegularOperator(operator);
    }

    render () {
        const { children } = this.props;

        return (
           <OperatorItem
               onButtonClick={this.onButtonClick}>
               {children}
           </OperatorItem>
        )
    }
}