import Header from '~/components/header';
import HeaderTitle from '~/components/header-title';
import HeaderTitleText from '~/components/header-title-text';
import ToggleLanguageLink from '~/components/toggle-language-link';
import HeaderDescription from '~/components/header-description';

export default function HomeHeader ({ language }) {
    return (
        <Header>
            <HeaderTitle>
                <HeaderTitleText>
                    {language.headerTitle}
                </HeaderTitleText>

                <ToggleLanguageLink
                    languageCode={language.code}
                />
            </HeaderTitle>

            <HeaderDescription>
                {language.headerDescription}
            </HeaderDescription>
        </Header>
    );
}
