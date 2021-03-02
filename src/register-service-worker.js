if ('production' === process.env.NODE_ENV) {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('service-worker.js');
        });
    }
}