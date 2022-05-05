import React from 'react';

import TruthTableExpressionFormView from './truth-table-expression-form-view';

import {
    isHtmlInputElement,
    getCurrentFocusedElement,
} from '../../utils/dom';

export default class TruthTableExpressionForm extends React.Component {
    constructor (...args) {
        super(...args);

        this.windowMouseUpHandler = () => {
            this.setExpressionCursorByFocusedElement();
        };

        this.state = {
            expressionCursorStart: 0,
            expressionCursorEnd: 0,
        };
    }

    componentDidMount () {
        this.addWindowMouseUpHandler();
    }

    componentWillUnmount() {
        this.removeWindowMouseUpHandler();
    }

    getExpressionValueStartOffset () {
        return 0;
    }

    getExpressionValueEndOffset () {
        return this.props.expressionValue.length;
    }

    setExpressionValue (expressionValue) {
        this.fireExpressionValueChange(expressionValue);
    }

    setExpressionCursorByFocusedElement () {
        const element = getCurrentFocusedElement();

        if (isHtmlInputElement(element)) {
            this.setExpressionCursorByInput(element);
        }
    }

    setExpressionCursorByInput (input) {
        const {
            selectionStart,
            selectionEnd,
        } = input;

        this.setExpressionCursor(
            selectionStart,
            selectionEnd,
        );
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

    setExpressionCursorWith (f) {
        this.setState(({expressionCursorStart, expressionCursorEnd}) => f({
            expressionCursorStart,
            expressionCursorEnd,
        }));
    }

    addWindowMouseUpHandler () {
        window.addEventListener('pointerup', this.windowMouseUpHandler);
    }

    removeWindowMouseUpHandler () {
        window.removeEventListener('pointerup', this.windowMouseUpHandler);
    }

    addRegularOperator (operator) {
        const {
            expressionCursorStart,
            expressionCursorEnd,
        } = this.state;

        this.replaceRangeByOperatorInExpressionValue(
            operator, expressionCursorStart, expressionCursorEnd
        );
    }

    addWrappingOperator (openingOperator, closingOperator, fallbackOperator) {
        const {
            expressionCursorStart,
            expressionCursorEnd,
        } = this.state;

        if (expressionCursorStart === expressionCursorEnd) {
            this.insertOperatorInExpressionValue(fallbackOperator,  expressionCursorStart);
        } else {
            this.wrapRangeWithOperatorsInExpressionValue(
                openingOperator, closingOperator, expressionCursorStart, expressionCursorEnd
            );
        }
    }

    wrapRangeWithOperatorsInExpressionValue (openingOperator, closingOperator, startOffset, endOffset) {
        this.computeExpressionValueShiftingWithOperator(openingOperator, (expressionValueStartOffset, expressionValueEndOffset) => {
            const expressionValueBeforeRange = this.substringExpressionValue(expressionValueStartOffset, startOffset);
            const expressionValueInRange = this.substringExpressionValue(startOffset, endOffset);
            const expressionValueAfter = this.substringExpressionValue(endOffset, expressionValueEndOffset);

            return (
                expressionValueBeforeRange +
                openingOperator +
                expressionValueInRange +
                closingOperator +
                expressionValueAfter
            );
        });
    }

    replaceRangeByOperatorInExpressionValue (operator, startOffset, endOffset) {
        this.computeExpressionValueShiftingWithOperator(operator, (expressionValueStartOffset, expressionValueEndOffset) => {
            const expressionValueStart = this.substringExpressionValue(expressionValueStartOffset, startOffset);
            const expressionValueEnd = this.substringExpressionValue(endOffset, expressionValueEndOffset);

            return expressionValueStart + operator + expressionValueEnd;
        });
    }

    insertOperatorInExpressionValue (operator, offset) {
        this.computeExpressionValueShiftingWithOperator(operator, (expressionValueStartOffset, expressionValueEndOffset) => {
            const expressionValueStart = this.substringExpressionValue(expressionValueStartOffset, offset);
            const expressionValueEnd = this.substringExpressionValue(offset, expressionValueEndOffset);

            return expressionValueStart + operator + expressionValueEnd;
        });
    }

    computeExpressionValueShiftingWithOperator (operator, f) {
        const computedExpressionValue = f(
            this.getExpressionValueStartOffset(),
            this.getExpressionValueEndOffset(),
        );

        this.setExpressionValue(computedExpressionValue);

        this.shiftExpressionCursorByOperatorLength(operator);
    }

    substringExpressionValue (start, end) {
        return this.props.expressionValue.substring(start, end);
    }

    shiftExpressionCursor (length) {
        this.setExpressionCursorWith(({expressionCursorStart, expressionCursorEnd}) => ({
            expressionCursorStart: expressionCursorStart + length,
            expressionCursorEnd: expressionCursorEnd + length,
        }));
    }

    shiftExpressionCursorByOperatorLength (operator) {
        this.shiftExpressionCursor(operator.length);
    }

    fireExpressionValueChange (expressionValue) {
        this.props.onExpressionValueChange(expressionValue);
    }

    onExpressionInputChange = (event) => {
        this.fireExpressionValueChange(event.target.value);
    }

    onExpressionInputKeyUp = (event) => {
        this.setExpressionCursorByInput(event.target);
    }

    onExpressionInputMouseUp = (event) => {
        this.setExpressionCursorByInput(event.target);
    }

    onAddRegularOperator = (operator) => {
        this.addRegularOperator(operator);
    }

    onAddWrappingOperator = (openingOperator, closingOperator, fallbackOperator) => {
        this.addWrappingOperator(openingOperator, closingOperator, fallbackOperator);
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
            <TruthTableExpressionFormView
                expressionValue={expressionValue}
                expressionValueIsInvalid={expressionValueIsInvalid}

                onExpressionInputKeyUp={this.onExpressionInputKeyUp}
                onExpressionInputChange={this.onExpressionInputChange}
                onExpressionInputMouseUp={this.onExpressionInputMouseUp}

                onAddRegularOperator={this.onAddRegularOperator}
                onAddWrappingOperator={this.onAddWrappingOperator}

                onFormSubmit={this.onFormSubmit} />
        );
    }
}