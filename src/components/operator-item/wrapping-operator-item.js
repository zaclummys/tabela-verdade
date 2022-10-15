import React from 'react';
import OperatorItem from './operator-item';

export default function WrappingOperatorItem ({
    children,
    openingOperator,
    closingOperator,
    fallbackOperator,
    onAddWrappingOperator,
}) {
    return (
        <OperatorItem onButtonClick={() => onAddWrappingOperator(
            openingOperator,
            closingOperator,
            fallbackOperator,
        )}>
            {children}
        </OperatorItem>
    );
}