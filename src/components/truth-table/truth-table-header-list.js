import React from 'react';
import TruthTableHeaderItem from './truth-table-header-item';

export default function TruthTableHeaderList ({ headers }) {
    return headers.map(header => (
        <TruthTableHeaderItem
            key={header}
            header={header} />
    ));
}