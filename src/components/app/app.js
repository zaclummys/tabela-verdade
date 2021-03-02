import React from 'react';
import AppStyle from './app.css';

import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';

export default function App () {
    return (
        <div className={AppStyle.app}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
