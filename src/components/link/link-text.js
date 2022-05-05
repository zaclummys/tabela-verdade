import React from 'react';

export default function LinkText ({ children }) {
    return (
        <span
            className="
                py-1 px-2 font-medium text-secondary text-sm rounded transition ease-out
                hover:bg-secondary hover:bg-opacity-10
            ">
            {children}
        </span>
    )
}