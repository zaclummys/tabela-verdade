import Header from '~/components/header';
import Footer from '~/components/footer';

import getLocaleByLanguage from '~/locales';

import CustomLink from '~/components/custom-link';

import HeaderTitle from '~/components/header-title';
import HeaderTitleText from '~/components/header-title-text';
import HeaderDescription from '~/components/header-description';

import ToggleLanguageLink from '~/components/toggle-language-link';
import ExpressionForm from '~/components/expression-form';

const linkedInUrl = 'https://www.linkedin.com/in/isaac-luiz-vieira-ferreira/';
const repositoryUrl = 'https://github.com/zaclummys/tabela-verdade';

export const generateMetadata = ({ params: { language } }) => {
    const { title, description } = getLocaleByLanguage(language);

    return {
        title,
        description,
    };
};

export default function Home ({ params: { language } }) {
    const locale = getLocaleByLanguage(language);

    return (
        <div className="container mx-auto flex flex-col gap-y-8 mt-8 px-8">
            <Header>
                <HeaderTitle>
                    <HeaderTitleText>
                        {locale.headerTitle}
                    </HeaderTitleText>

                    <ToggleLanguageLink
                        language={locale.language}
                    />
                </HeaderTitle>

                <HeaderDescription>
                    {locale.headerDescription}
                </HeaderDescription>
            </Header>

            <ExpressionForm
                locale={locale}
            />

            <Footer>
                <CustomLink
                    href={linkedInUrl}
                    target="_blank"
                >
                    Isaac Luiz Vieira Ferreira
                </CustomLink>

                <CustomLink
                    href={repositoryUrl}
                    target="_blank"
                >
                    {locale.footerRepositoryLinkLabel}
                </CustomLink>
            </Footer>
        </div>
    );
}
