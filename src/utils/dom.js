export function getCurrentFocusedElement () {
    return document.activeElement;
}

export function isHtmlInputElement (element) {
    return element instanceof HTMLInputElement;
}