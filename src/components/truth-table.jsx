function enrichCellsWithKeys (cells) {
    return cells.map((cellValue, cellIndex) => ({
        key: `${cellValue}-${cellIndex}`,
        value: cellValue,
    }));
}

function enrichRowsWithKeys (rows) {
    return rows.map((cells) => ({
        key: cells.join('-'),
        cells,
    }));
}

export default function TruthTable ({
    truthTable,
    truthTableHint,
    truthTableTrueCellLabel,
    truthTableFalseCellLabel,
}) {
    if (truthTable == null) {
        return (
            <p className="text-center text-sm text-gray-500">
                {truthTableHint}
            </p>
        );
    } else {
        const [
            headers,
            rows,
        ] = truthTable;

        return (
            <table className="group mx-auto table-auto ring-2 ring-primary rounded-sm cursor-default transition-shadow hover:ring-primary-dark shadow-md">
                <thead className="bg-primary text-white border-b-2 border-primary group-hover:border-primary-dark">
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header}
                                className="py-2 px-6 border-primary-dark font-bold whitespace-nowrap"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {enrichRowsWithKeys(rows).map(({ key, cells }) => (
                        <tr
                            key={key}
                            className="transition even:bg-gray-200 hover:bg-primary hover:text-white"
                        >
                            {enrichCellsWithKeys(cells).map(({ key, value }) => (
                                <td
                                    key={key}
                                    className="py-2 px-6 text-center font-medium text-sm"
                                >
                                    <span>
                                        {value
                                            ? truthTableTrueCellLabel
                                            : truthTableFalseCellLabel}
                                    </span>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
