import React from 'react';

export default function Link ({ url, children }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="
                py-1 px-2 font-medium text-secondary rounded transition ease-out
                hover:bg-secondary hover:bg-opacity-10
            ">
            {children}
        </a>
    );
}