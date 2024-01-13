import { googleSiteVerification } from '~/config';

export default function MetaGoogleVerificationSite () {
    if (!googleSiteVerification) {
        return null;
    }

    return (
        <meta
            name="google-site-verification"
            content={googleSiteVerification}
        />
    );
}
