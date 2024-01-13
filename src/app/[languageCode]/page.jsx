import { findLanguageByCode } from 'src/languages';

import HomeHeader from './home-header';
import HomeFooter from './home-footer';

import ExpressionForm from '~/components/expression-form';

export default function Home ({ params: { languageCode } }) {
    const language = findLanguageByCode(languageCode);

    return (
        <div className="container mx-auto flex flex-col gap-y-8 mt-8 px-8">
            <HomeHeader language={language} />

            <ExpressionForm language={language} />

            <HomeFooter language={language} />
        </div>
    );
}
