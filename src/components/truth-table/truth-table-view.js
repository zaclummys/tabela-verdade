import React from 'react';

import TruthTableRow from './truth-table-row';
import TruthTableHeader from './truth-table-header';
import TruthTablePlaceholder from './truth-table-placeholder';

export default function TruthTableView ({
    rows,
    expressions,
}) {
    if (rows.length === 0 && expressions.length === 0) {
        return (
            <TruthTablePlaceholder />
        );
    }

    return (
        <table
            className="group mx-auto table-auto ring-2 ring-primary rounded-sm cursor-default transition-shadow hover:ring-primary-dark shadow-md">
            <thead
                className="bg-primary text-white border-b-2 border-primary group-hover:border-primary-dark">
            <tr>
                <TruthTableHeaderList
                    expressions={expressions}/>
            </tr>
            </thead>

            <tbody>
                <TruthTableRowList
                    rows={rows}/>
            </tbody>
        </table>
    );
}

function TruthTableHeaderList({expressions}) {
    return expressions.map(expression => (
        <TruthTableHeader expression={expression}/>
    ));
}

function TruthTableRowList({rows}) {
    return rows.map(values => (
        <TruthTableRow values={values}/>
    ));
}