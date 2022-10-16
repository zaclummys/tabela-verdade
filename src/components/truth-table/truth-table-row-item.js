import React from 'react';
import TruthTableCellList from './truth-table-cell-list';

export default function TruthTableRowItem ({ row, headers }) {
    return (
        <tr className="transition even:bg-gray-200 hover:bg-primary-dark hover:text-white">
            <TruthTableCellList
                cells={row}
                headers={headers} />
        </tr>
    );
}

