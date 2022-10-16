import React from 'react';
import TruthTableCellItem from './truth-table-cell-item';

function enrichCellsWithKeys (cells, headers) {
    const cellsEnrichedWithKeys = [];

    for (let index = 0; index < cells.length && headers.length; index++) {
        cellsEnrichedWithKeys.push({
            key: headers[index],
            cell: cells[index],
        });
    }

    return cellsEnrichedWithKeys;
}

export default function TruthTableCellList ({ cells, headers }) {
    const cellsEnrichedWithKeys = enrichCellsWithKeys(cells, headers);

    return cellsEnrichedWithKeys.map(({ key, cell }) => (
        <TruthTableCellItem
            key={key}
            cell={cell} />
    ));
}