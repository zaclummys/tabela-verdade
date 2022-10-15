import React from 'react';
import OperatorItem from './operator-item';

export default function RegularOperatorItem ({
    children,
    operator,
    onAddRegularOperator,
}) {
    return (
       <OperatorItem onButtonClick={() => onAddRegularOperator(operator)}>
           {children}
       </OperatorItem>
    );
}