import zod from 'zod';

const environmentVariablesSchema = zod.object({
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: zod.string(),
    NEXT_PUBLIC_MICROSOFT_SITE_VERIFICATION: zod.string(),
});

const environmentVariables = environmentVariablesSchema.parse({
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    NEXT_PUBLIC_MICROSOFT_SITE_VERIFICATION: process.env.NEXT_PUBLIC_MICROSOFT_SITE_VERIFICATION,
});

export const googleSiteVerification = environmentVariables.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
export const microsoftSiteVerification = environmentVariables.NEXT_PUBLIC_MICROSOFT_SITE_VERIFICATION;
