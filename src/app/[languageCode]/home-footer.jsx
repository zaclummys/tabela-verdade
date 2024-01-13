import Footer from '~/components/footer';
import CustomLink from '~/components/custom-link';

const linkedInUrl = 'https://www.linkedin.com/in/isaac-luiz-vieira-ferreira/';
const repositoryUrl = 'https://github.com/zaclummys/tabela-verdade';

export default function HomeFooter ({ language }) {
    return (
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
                {language.footerRepositoryLinkLabel}
            </CustomLink>
        </Footer>
    );
}
