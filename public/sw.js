if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {   navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration :', registration.scope);
        }).catch(function (error) {
            console.log('ServiceWorker registration failed:', errror);
        });
    });
}

var CACHE_NAME = 'pwgen-cache-v1';

/**
 * The install event is fired when the registration succeeds.
 * After the install step, the browser tries to activate the service worker.
 * Generally, we cache static resources that allow the website to run offline
 */
self.addEventListener('install', async function () {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
        'all files to be cached here'
    ])
});

self.addEventListener('fetch', function (event) {});