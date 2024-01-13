export function replaceSelectionWithOperator ({
    string,
    selectionStart,
    selectionEnd,
    operator,
}) {
    const stringStart = 0;
    const stringEnd = string.length;

    const before = string.slice(
        stringStart,
        selectionStart,
    );

    const after = string.slice(
        selectionEnd,
        stringEnd,
    );

    return `${before}${operator}${after}`;
}

export function wrapSelectionWithOperators ({
    string,
    selectionStart,
    selectionEnd,
    openingOperator,
    closingOperator,
}) {
    const stringStart = 0;
    const stringEnd = string.length;

    const before = string.slice(
        stringStart,
        selectionStart,
    );
    const selected = string.slice(
        selectionStart,
        selectionEnd,
    );

    const after = string.slice(
        selectionEnd,
        stringEnd,
    );

    return `${before}${openingOperator}${selected}${closingOperator}${after}`;
}
