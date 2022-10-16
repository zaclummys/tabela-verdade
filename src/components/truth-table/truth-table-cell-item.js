import React from 'react';
import LocaleContext from '../../contexts/locale';

export default function TruthTableCellItem ({ cell }) {
    return (
        <LocaleContext.Consumer>
            {({ truthTableTrueCell, truthTableFalseCell }) => (
                <td className="py-2 px-6 text-center font-medium text-sm">
                    <span>
                        {cell ? truthTableTrueCell : truthTableFalseCell}
                    </span>
                </td>
            )}
        </LocaleContext.Consumer>
    );
}