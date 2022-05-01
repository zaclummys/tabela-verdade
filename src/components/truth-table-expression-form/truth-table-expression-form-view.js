import React from 'react';

import TruthTableExpressionInput from '../truth-table-expression-input/truth-table-expression-input';
import OperatorGroupList from '../operator-group-list/operator-group-list';
import OperatorGroupItem from '../operator-group-item/operator-group-item';
import OperatorList from '../operator-list/operator-list';
import RegularOperatorItem from '../operator-item/regular-operator-item';
import WrappingOperatorItem from '../operator-item/wrapping-operator-item';

export default function TruthTableExpressionFormView ({
    expressionValue,
    expressionValueIsInvalid,

    onExpressionInputKeyUp,
    onExpressionInputChange,
    onExpressionInputMouseUp,

    onAddRegularOperator,
    onAddWrappingOperator,

    onFormSubmit,
}) {
    return (
        <form
            onSubmit={onFormSubmit}>
            <TruthTableExpressionInput
                value={expressionValue}
                invalid={expressionValueIsInvalid}
                onKeyUp={onExpressionInputKeyUp}
                onChange={onExpressionInputChange}
                onMouseUp={onExpressionInputMouseUp} />

            <OperatorGroupList>
                <OperatorGroupItem name="Parênteses">
                    <OperatorList>
                        <WrappingOperatorItem
                            openingOperator="("
                            closingOperator=")"
                            fallbackOperator="("
                            onAddWrappingOperator={onAddWrappingOperator}>
                            &#40;
                        </WrappingOperatorItem>
                        <WrappingOperatorItem
                            openingOperator="("
                            closingOperator=")"
                            fallbackOperator=")"
                            onAddWrappingOperator={onAddWrappingOperator}>
                            &#41;
                        </WrappingOperatorItem>
                    </OperatorList>
                </OperatorGroupItem>
                <OperatorGroupItem name="Negação">
                    <OperatorList>
                        <RegularOperatorItem
                            operator="¬"
                            onAddRegularOperator={onAddRegularOperator}>
                            &#172;
                        </RegularOperatorItem>
                        <RegularOperatorItem
                            operator="~"
                            onAddRegularOperator={onAddRegularOperator}>
                            &#126;
                        </RegularOperatorItem>
                        <RegularOperatorItem
                            operator="!"
                            onAddRegularOperator={onAddRegularOperator}>
                            &#33;
                        </RegularOperatorItem>
                    </OperatorList>
                </OperatorGroupItem>

                <OperatorGroupItem name="Conjunção">
                    <OperatorList>
                        <RegularOperatorItem
                            operator="∧"
                            onAddRegularOperator={onAddRegularOperator}>
                            &#8743;
                        </RegularOperatorItem>
                        <RegularOperatorItem
                            operator="&"
                            onAddRegularOperator={onAddRegularOperator}>
                            &#38;
                        </RegularOperatorItem>
                        <RegularOperatorItem
                            operator="*"
                            onAddRegularOperator={onAddRegularOperator}>
                            &#42;
                        </RegularOperatorItem>
                    </OperatorList>
                </OperatorGroupItem>

                <OperatorGroupItem name="Disjunção">
                    <OperatorList>
                        <RegularOperatorItem
                            operator="∨"
                            onAddRegularOperator={onAddRegularOperator}>
                            &#8744;
                        </RegularOperatorItem>
                        <RegularOperatorItem
                            operator="|"
                            onAddRegularOperator={onAddRegularOperator}>
                            &#124;
                        </RegularOperatorItem>
                        <RegularOperatorItem
                            operator="+"
                            onAddRegularOperator={onAddRegularOperator}>
                            &#43;
                        </RegularOperatorItem>
                    </OperatorList>
                </OperatorGroupItem>

                <OperatorGroupItem name="Condicional">
                    <OperatorList>
                        <RegularOperatorItem
                            operator="→"
                            onAddRegularOperator={onAddRegularOperator}>
                            &#8594;
                        </RegularOperatorItem>
                        <RegularOperatorItem
                            operator="⇒"
                            onAddRegularOperator={onAddRegularOperator}>
                            &#8658;
                        </RegularOperatorItem>
                        <RegularOperatorItem
                            operator="->"
                            onAddRegularOperator={onAddRegularOperator}>
                            &#45;&#62;
                        </RegularOperatorItem>
                    </OperatorList>
                </OperatorGroupItem>

                <OperatorGroupItem name="Bicondicional">
                    <OperatorList>
                        <RegularOperatorItem
                            operator="↔"
                            onAddRegularOperator={onAddRegularOperator}>
                            &#8596;
                        </RegularOperatorItem>
                        <RegularOperatorItem
                            operator="⇔"
                            onAddRegularOperator={onAddRegularOperator}>
                            &#8660;
                        </RegularOperatorItem>
                        <RegularOperatorItem
                            operator="<->"
                            onAddRegularOperator={onAddRegularOperator}>
                            &#60;&#45;&#62;
                        </RegularOperatorItem>
                    </OperatorList>
                </OperatorGroupItem>
            </OperatorGroupList>
        </form>
    );
}