import React from 'react';
import LocaleContext from '../../contexts/locale';

export default function TruthTableCell ({ value }) {
    return (
        <LocaleContext.Consumer>
            {locale => (
                <td className="py-2 px-6 text-center font-medium text-sm">
                    {value ? (
                        <span>{locale.truthTableTrueCell}</span>
                    ) : (
                        <span>{locale.truthTableFalseCell}</span>
                    )}
                </td>
            )}
        </LocaleContext.Consumer>
    );
}