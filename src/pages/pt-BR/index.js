import React from 'react';
import Container from '../../components/container/container';

import ptBR from '../../locales/pt-br';
import LocaleContext from '../../contexts/locale';

export default function IndexPtBR () {
    return (
        <LocaleContext.Provider value={ptBR}>
            <Container />
        </LocaleContext.Provider>
    );
}