import React from 'react';

export default function OperatorList ({ children }) {
    return (
        <ol className="inline space-x-1">
            {children}
        </ol>
    );
}