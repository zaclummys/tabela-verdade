import React from 'react';
import TruthTableCell from './truth-table-cell';

export default function TruthTableRow ({ values }) {
    return (
        <tr className="transition even:bg-gray-200 hover:bg-primary-dark hover:text-white">
            {values.map(values => (
                <TruthTableCell value={values} />
            ))}
        </tr>
    );
}