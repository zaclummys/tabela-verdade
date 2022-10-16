import React from 'react';

import TruthTableRowList from './truth-table-row-list';
import TruthTableHeaderList from './truth-table-header-list';

export default function TruthTableContent ({ rows, headers }) {
    return (
        <table className="group mx-auto table-auto ring-2 ring-primary rounded-sm cursor-default transition-shadow hover:ring-primary-dark shadow-md">
            <thead className="bg-primary text-white border-b-2 border-primary group-hover:border-primary-dark">
                <tr>
                    <TruthTableHeaderList headers={headers} />
                </tr>
            </thead>

            <tbody>
                <TruthTableRowList
                    rows={rows}
                    headers={headers} />
            </tbody>
        </table>
    );
}