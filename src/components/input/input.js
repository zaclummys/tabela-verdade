import React from 'react';
import InputStyle from './input.css';

export default function Input ({ error, ...props }) {
    let className;

    if (error) {
        className = InputStyle.error;
    }

    return (
        <div className={className}>
            <input className={InputStyle.input} {...props} />
        </div>
    );
}
