import React from 'react';
import LocaleContext from '../../contexts/locale';

function computeValidityClassNames (validity) {
    if (validity) {
        return 'ring-primary border-gray-300 hover:border-primary focus:border-primary';
    } else {
        return 'ring-red-500 border-red-500 hover:border-red-500 focus:border-red-500';
    }
}

export default function TruthTableExpressionInput ({
    value,
    validity,
    onKeyUp,
    onChange,
    onMouseUp,
}) {
    return (
        <LocaleContext.Consumer>
            {locale => (
                <input
                    required
                    autoFocus
                    type="text"
                    autoComplete="off"
                    placeholder={locale.truthTableInputHint}
                    value={value}
                    onKeyUp={onKeyUp}
                    onChange={onChange}
                    onMouseUp={onMouseUp}
                    className={`
                        p-2 w-full border-2 rounded transition
                        ring-opacity-20 focus:ring-2
                        ${computeValidityClassNames(validity)}
                    `}
                />
            )}
        </LocaleContext.Consumer>
    );
}