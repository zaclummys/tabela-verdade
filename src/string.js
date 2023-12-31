export function replaceSelectionWithOperator ({
    string,
    selectionStart,
    selectionEnd,
    operator,
}) {
    const before = string.slice(
        0,
        selectionStart
    );
    const after = string.slice(selectionEnd);

    return `${before}${operator}${after}`;
}

export function wrapSelectionWithOperators ({
    string,
    selectionStart,
    selectionEnd,
    openingOperator,
    closingOperator,
}) {
    const before = string.slice(
        0,
        selectionStart
    );
    const selected = string.slice(
        selectionStart,
        selectionEnd
    );
    const after = string.slice(selectionEnd);

    return `${before}${openingOperator}${selected}${closingOperator}${after}`;
}
