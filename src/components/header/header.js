import React from 'react';

import LocaleContext from '../../contexts/locale';

import SwitchLanguageLink from './switch-language-link';

export default function Header () {
    return (
        <LocaleContext.Consumer>
            {locale => (
                <header className="my-8 print:hidden">
                    <div className="flex items-center flex-col-reverse sm:flex-row sm:items-center">
                        <h1 className="flex-auto text-3xl font-bold text-primary text-center sm:text-left">
                            {locale.headerTitle}
                        </h1>

                        <div className="mb-3 sm:mb-0">
                            <SwitchLanguageLink
                                language={locale.language} />
                        </div>
                    </div>

                    <p className="my-6 text-justify">
                        {locale.headerDescription}
                    </p>
                </header>
            )}
        </LocaleContext.Consumer>
    );
}