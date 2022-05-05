import React from 'react';
import LocaleContext from '../../contexts/locale';

export default function TruthTablePlaceholder () {
    return (
        <LocaleContext.Consumer>
            {locale => (
                <p className="text-center text-sm text-gray-500">
                    {locale.truthTableHint}
                </p>
            )}
        </LocaleContext.Consumer>
    );
}