import React from 'react';

import HeaderTitle from './header-title';
import HeaderDescription from './header-description';

import HeaderStyle from './header.css';

export default function Header () {
    return (
        <header className={HeaderStyle.header}>
            <HeaderTitle />
            <HeaderDescription />
        </header>
    );
}
