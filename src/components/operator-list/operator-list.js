import React from 'react';

export default function OperatorList ({ children }) {
    return (
        <ol className="inline flex flex-col items-center space-y-1 md:flex-row md:space-x-1 md:space-y-0">
            {children}
        </ol>
    );
}