function loadGoogleAnalytics (googleAnalyticsId) {
    const script = document.createElement('script');

    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + googleAnalyticsId;
    script.async = true;

    document.body.appendChild(script);
}

function pushGoogleAnalyticsTags (googleAnalyticsId) {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push(['js', new Date()]);
    window.dataLayer.push(['config', googleAnalyticsId]);
}

if (process.env.NODE_ENV === 'production') {
    const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

    loadGoogleAnalytics(googleAnalyticsId);
    pushGoogleAnalyticsTags(googleAnalyticsId);
}
