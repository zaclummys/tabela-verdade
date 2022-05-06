import React from 'react';

export default function OperatorGroupItem ({ name, children }) {
    return (
        <div className="flex flex-col items-center space-y-2 xl:flex-row xl:space-y-0 xl:space-x-2 snap-start">
            <span className="text-sm text-center xl:text-left">{name}</span>

            {children}
        </div>
    )
}