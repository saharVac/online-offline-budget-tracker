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
self.addEventListener("activate", function(evt) {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// if someone is making a request, we are checking to see do we have a cached response already, so there's no request to the server. Otherwise, we're going to use fetch and perform a request from the server and put it in the cache.
self.addEventListener('fetch', function(evt) {
  // code to handle requests goes here
  if (evt.request.url.includes('api')) {
    console.log('[Service Worker] Fetch {data}', evt.request.url);

      evt.respondWith(
        caches.open(DATA_CACHE_NAME).then(cache => {
          return fetch(evt.request)
            .then(response => {
              if (response.status === 200) {
                cache.put(evt.request.url, response.clone());
              }

              return response;
            })
            .catch(err => {
              return cache.match(evt.request);
            });
        })
      );
  
    return;
  }

  evt.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(evt.request).then(response => {
        return response || fetch(evt.request);
      });
    })
  );
});