import React from 'react';
import Container from '../components/container/container';

import enUS from '../locales/en-us';
import LocaleContext from '../contexts/locale';

export default function IndexEnUS () {
    return (
        <LocaleContext.Provider value={enUS}>
            <Container />
        </LocaleContext.Provider>
    );
}