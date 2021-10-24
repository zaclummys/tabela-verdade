import React from 'react';

export default function OperatorGroupItem ({ name, children }) {
    return (
        <div>
            <span className="mr-2">{name}:</span>

            <div className="inline-flex">
                {children}
            </div>
        </div>
    )
}