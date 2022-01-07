import React from 'react';

function computeValidityClassNames (invalid) {
    if (invalid) {
        return 'ring-red-500 border-red-500 hover:border-red-500 focus:border-red-500';
    } else {
        return 'ring-primary border-gray-200 hover:border-primary focus:border-primary';
    }
}

export default function TruthTableExpressionInput ({
    value,
    invalid,
    onRef,
    onChange,
}) {
    return (
        <input
            required
            autoFocus
            type="text"
            autoComplete="off"
            placeholder="Digite a expressão lógica. Por exemplo (A ∧ B) → (C ∨ D)."
            className={`
                p-2 w-full border-2 rounded transition
                ring-opacity-20 focus:ring-2
                ${computeValidityClassNames(invalid)}
            `}
            value={value}
            ref={onRef}
            onChange={onChange}
        />
    )
}