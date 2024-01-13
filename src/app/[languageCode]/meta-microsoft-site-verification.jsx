import { microsoftSiteVerification } from '~/config';

export default function MetaMicrosoftVerificationSite () {
    if (!microsoftSiteVerification) {
        return null;
    }

    return (
        <meta
            name="msvalidate.01"
            content={microsoftSiteVerification}
        />
    );
}
