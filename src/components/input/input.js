import React from 'react';
import InputStyle from './input.css';

export default function Input ({ error, ...props }) {
    return <input className={InputStyle.input} data-error={error} {...props} />
}
