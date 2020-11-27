// service worker must live within the public folder
// caches all three html pages and all of our bundles, our fonts and our css
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/css/styles.css',
  '/dist/app.bundle.js',
  '/dist/API.bundle.js',
  '/dist/domMethods.bundle.js',
  '/dist/indexedDb.bundle.js',
  'manifest.webmanifest',
  'https://fonts.googleapis.com/css?family=Istok+Web|Montserrat:800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
];

const CACHE_NAME = 'static-cache-v1';
const DATA_CACHE_NAME = 'data-cache-v1';

// initial installation, caching all files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      // go through all files to cache
      .then((cache) => cache.addAll(FILES_TO_CACHE))
      // allows us to move to the next step
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', (event) => {
  // grabs our caches in an array
  const currentCaches = [CACHE_NAME, DATA_CACHE_NAME];
  // checks if they've been changed
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName)); // returns all cached information not in currentCaches 
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// if someone is making a request, we are checking to see do we have a cached response already, so there's no request to the server. Otherwise, we're going to use fetch and perform a request from the server and put it in the cache.
self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(DATA_CACHE_NAME).then((cache) => {
          return fetch(event.request).then((response) => {
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            }).catch(err => {
              return cache.match(event.request)
            });
          });
        });
      })
    );
    return
  }
});
