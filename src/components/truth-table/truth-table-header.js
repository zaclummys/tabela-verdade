import React from 'react';

export default function TruthTableHeader ({ expression }) {
    return (
        <th className="py-2 px-6 border-primary-dark font-bold whitespace-nowrap">
            {expression}
        </th>
    );
}