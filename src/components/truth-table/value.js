import React from 'react';

export default function Value ({ value }) {
    if (value) {
        return <span>V</span>;
    }

    return <span>F</span>;
}
