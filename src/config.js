import zod from 'zod';

const environmentVariablesSchema = zod.object({
    NEXT_PUBLIC_VERCEL_URL: zod.string(),
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: zod.string(),
    NEXT_PUBLIC_MICROSOFT_SITE_VERIFICATION: zod.string(),
});

const environmentVariables = environmentVariablesSchema.parse({
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    NEXT_PUBLIC_MICROSOFT_SITE_VERIFICATION: process.env.NEXT_PUBLIC_MICROSOFT_SITE_VERIFICATION,
});

export const baseUrl = environmentVariables.NEXT_PUBLIC_VERCEL_URL;
export const googleSiteVerification = environmentVariables.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
export const microsoftSiteVerification = environmentVariables.NEXT_PUBLIC_MICROSOFT_SITE_VERIFICATION;

export function mergeUrl (relativeUrl) {
    return `https://${baseUrl}/${relativeUrl}`;
}
