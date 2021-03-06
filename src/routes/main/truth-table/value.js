import React from 'react';

export default function Value ({ value }) {
    if (value) {
        return <span>V</span>;
    }
    else {
        return <span>F</span>;
    }
}
