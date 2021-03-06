import React from 'react';
import MainRoute from '../../routes/main/main';

import AppStyle from './app.css';

export default function App () {
    return (
        <div className={AppStyle.app}>
            <MainRoute />
        </div>
    );
}
