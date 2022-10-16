import React from 'react';
import TruthTableRowItem from './truth-table-row-item';

function enrichRowsWithKeys (rows) {
    return rows.map(row => ({
        key: row.join('-'),
        row: row,
    }));
}

export default function TruthTableRowList ({ rows, headers }) {
    const rowsEnrichedWithKeys = enrichRowsWithKeys(rows);

    return rowsEnrichedWithKeys.map(({ key, row }) => (
        <TruthTableRowItem
            key={key}
            row={row}
            headers={headers} />
    ));
}