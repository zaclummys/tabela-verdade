import z from 'zod';

const environmentVariablesSchema = z.object({
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: z.string(),
    NEXT_PUBLIC_MICROSOFT_SITE_VERIFICATION: z.string(),
});

const environmentVariables = environmentVariablesSchema.parse({
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    NEXT_PUBLIC_MICROSOFT_SITE_VERIFICATION: process.env.NEXT_PUBLIC_MICROSOFT_SITE_VERIFICATION,
});

export const googleSiteVerification = environmentVariables.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
export const microsoftSiteVerification = environmentVariables.NEXT_PUBLIC_MICROSOFT_SITE_VERIFICATION;
