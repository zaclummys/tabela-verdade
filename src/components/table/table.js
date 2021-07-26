import React from 'react';
import TableStyle from './table.css';

export function Table (props) {
    return <table className={TableStyle.table} {...props} />;
}

export function Head (props) {
    return <thead {...props} />;
}

export function Header (props) {
    return <th className={TableStyle.header} {...props} />;
}

export function Body (props) {
    return <tbody className={TableStyle.body} {...props} />;
}

export function Row (props) {
    return <tr className={TableStyle.row} {...props} />;
}

export function Data (props) {
    return <td className={TableStyle.data} {...props} />;
}
