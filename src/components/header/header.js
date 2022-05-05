import React from 'react';

import LocaleContext from '../../contexts/locale';

import SwitchLanguageLink from './switch-language-link';

export default function Header () {
    return (
        <LocaleContext.Consumer>
            {locale => (
                <header className="my-8">
                    <div className="flex items-center flex-col sm:flex-row sm:items-center">
                        <h1 className="flex-auto text-3xl font-bold text-primary">
                            {locale.headerTitle}
                        </h1>

                        <div className="mt-3 sm:mt-0">
                            <SwitchLanguageLink
                                language={locale.language} />
                        </div>
                    </div>

                    <p className="my-6">
                        {locale.headerDescription}
                    </p>
                </header>
            )}
        </LocaleContext.Consumer>
    );
}