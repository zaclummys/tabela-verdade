import React from "react";

export default function TruthTableCell ({ value }) {
    return (
        <td className="py-2 px-6 text-center font-medium text-sm">
            {value ? (
                <span>V</span>
            ) : (
                <span>F</span>
            )}
        </td>
    );
}