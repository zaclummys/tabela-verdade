import React from 'react';
import LocaleContext from '../../contexts/locale';

export default function TruthTableContentPlaceholder () {
    return (
        <LocaleContext.Consumer>
            {locale => (
                <p className="text-center text-sm text-gray-500 print:hidden">
                    {locale.truthTableHint}
                </p>
            )}
        </LocaleContext.Consumer>
    );
}