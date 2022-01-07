import React from 'react';

import OperatorList from '../operator-list/operator-list';
import OperatorItem from '../operator-item/operator-item';
import OperatorGroupList from '../operator-group-list/operator-group-list';
import OperatorGroupItem from '../operator-group-item/operator-group-item';
import TruthTableExpressionInput from "../truth-table-expression-input/truth-table-expression-input";

export default class TruthTableExpressionForm extends React.Component {
    constructor (...args) {
        super(...args);

        this.expressionInputElement = null;

        this.onDocumentKeyUp = () => {
            this.syncExpressionCursor();
        };

        this.onDocumentMouseUp = () => {
            this.syncExpressionCursor();
        };

        this.state = {
            expressionInputFocus: false,
            expressionCursorStart: 0,
            expressionCursorEnd: 0,
        };
    }

    componentDidMount () {
        this.subscribeDocumentEvents();
    }

    componentWillUnmount () {
        this.unsubscribeDocumentEvents();
    }

    subscribeDocumentEvents () {
        document.addEventListener('keyup', this.onDocumentKeyUp);
        document.addEventListener('mouseup', this.onDocumentMouseUp);
    }

    unsubscribeDocumentEvents () {
        document.removeEventListener('keyup', this.onDocumentKeyUp);
        document.removeEventListener('mouseup', this.onDocumentMouseUp);
    }

    syncExpressionCursor () {
        const input = this.expressionInputElement;

        if (input) {
            const {
                selectionStart,
                selectionEnd,
            } = input;

            this.setExpressionCursor(
                selectionStart,
                selectionEnd,
            );
        }
    }

    setExpressionCursor (
        expressionCursorStart,
        expressionCursorEnd,
    ) {
        this.setState({
            expressionCursorStart,
            expressionCursorEnd,
        });
    }

    setExpressionInputFocus (expressionInputFocus) {
        this.setState({
            expressionInputFocus
        })
    }

    setExpressionInputElement (element) {
        this.expressionInputElement = element;
    }

    onAddOperator = (operator) => {
        const {
            expressionCursorStart,
            expressionCursorEnd,
        } = this.state;

        const expressionValueStart = 0;
        const expressionValueEnd = this.getExpressionValueLength();

        const builtExpressionValue = (
            this.substringExpressionValue(expressionValueStart, expressionCursorStart)
            + operator +
            this.substringExpressionValue(expressionCursorEnd, expressionValueEnd)
        );

        this.shiftExpressionCursorByOperator(operator);

        this.fireExpressionValueChange(builtExpressionValue);
    }

    getExpressionValueLength () {
        return this.props.expressionValue.length;
    }

    substringExpressionValue (start, end) {
        return this.props.expressionValue.substring(start, end);
    }

    shiftExpressionCursor (length) {
        this.setState(({ expressionCursorStart, expressionCursorEnd }) => ({
            expressionCursorStart: expressionCursorStart + length,
            expressionCursorEnd: expressionCursorEnd + length,
        }));
    }

    shiftExpressionCursorByOperator (operator) {
        this.shiftExpressionCursor(operator.length);
    }

    onExpressionInputChange = (event) => {
        this.fireExpressionValueChange(event.target.value);
    }

    onExpressionInputRef = (element) => {
        this.setExpressionInputElement(element);
    }

    fireExpressionValueChange (value) {
        const { onExpressionValueChange } = this.props;

        if (onExpressionValueChange) {
            onExpressionValueChange(value);
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
    }

    render () {
        const {
            expressionValue,
            expressionValueIsInvalid,
        } = this.props;

        return (
            <form
                onSubmit={this.onFormSubmit}>
                <TruthTableExpressionInput
                    value={expressionValue}
                    invalid={expressionValueIsInvalid}
                    onRef={this.onExpressionInputRef}
                    onChange={this.onExpressionInputChange}
                    onKeyUp={this.onExpressionInputKeyUp}
                    onMouseUp={this.onExpressionInputMouseUp} />

                <OperatorGroupList>
                    <OperatorGroupItem name="Negação">
                        <OperatorList>
                            <OperatorItem
                                operator="¬"
                                onAddOperator={this.onAddOperator}>
                                &#172;
                            </OperatorItem>
                            <OperatorItem
                                operator="~"
                                onAddOperator={this.onAddOperator}>
                                &#126;
                            </OperatorItem>
                            <OperatorItem
                                operator="!"
                                onAddOperator={this.onAddOperator}>
                                &#33;
                            </OperatorItem>
                        </OperatorList>
                    </OperatorGroupItem>

                    <OperatorGroupItem name="Conjunção">
                        <OperatorList>
                            <OperatorItem
                                operator="∧"
                                onAddOperator={this.onAddOperator}>
                                &#8743;
                            </OperatorItem>
                            <OperatorItem
                                operator="&"
                                onAddOperator={this.onAddOperator}>
                                &#38;
                            </OperatorItem>
                            <OperatorItem
                                operator="*"
                                onAddOperator={this.onAddOperator}>
                                &#42;
                            </OperatorItem>
                        </OperatorList>
                    </OperatorGroupItem>

                    <OperatorGroupItem name="Disjunção">
                        <OperatorList>
                            <OperatorItem
                                operator="∨"
                                onAddOperator={this.onAddOperator}>
                                &#8744;
                            </OperatorItem>
                            <OperatorItem
                                operator="|"
                                onAddOperator={this.onAddOperator}>
                                &#124;
                            </OperatorItem>
                            <OperatorItem
                                operator="+"
                                onAddOperator={this.onAddOperator}>
                                &#43;
                            </OperatorItem>
                        </OperatorList>
                    </OperatorGroupItem>

                    <OperatorGroupItem name="Implicação">
                        <OperatorList>
                            <OperatorItem
                                operator="→"
                                onAddOperator={this.onAddOperator}>
                                &#8594;
                            </OperatorItem>
                            <OperatorItem
                                operator="⇒"
                                onAddOperator={this.onAddOperator}>
                                &#8658;
                            </OperatorItem>
                            <OperatorItem
                                operator="->"
                                onAddOperator={this.onAddOperator}>
                                &#45;&#62;
                            </OperatorItem>
                        </OperatorList>
                    </OperatorGroupItem>

                    <OperatorGroupItem name="Equivalência">
                        <OperatorList>
                            <OperatorItem
                                operator="↔"
                                onAddOperator={this.onAddOperator}>
                                &#8596;
                            </OperatorItem>
                            <OperatorItem
                                operator="⇔"
                                onAddOperator={this.onAddOperator}>
                                &#8660;
                            </OperatorItem>
                            <OperatorItem
                                operator="<->"
                                onAddOperator={this.onAddOperator}>
                                &#60;&#45;&#62;
                            </OperatorItem>
                        </OperatorList>
                    </OperatorGroupItem>
                </OperatorGroupList>
            </form>
        );
    }
}