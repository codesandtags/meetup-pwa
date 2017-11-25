/**
 * Import some needed scripts for SW
 */
importScripts('/assets/scripts/idb.js');
importScripts('/assets/scripts/idb-meetup.js');

let CACHE_STATIC_NAME = 'static-v3';
let CACHE_DYNAMIC_NAME = 'dynamic-v3';
let STATIC_FILES = [
  '/',
  '/index.html',
  '/assets/images/404.png',
  '/assets/images/logo_meetup.png',
  '/assets/scripts/idb.js',
  '/assets/scripts/idb-meetup.js'
];


/**
 * Tasks run by Service Worker when the [install] event is fired
 */
self.addEventListener('install', function(event) {
  console.info('[SW 🔨] SW has been installed!');

  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(function(cache) {
      console.info('[SW 🔨] Pre-Caching static files...');
      return cache.addAll(STATIC_FILES);
    }).catch(function(error) {
      console.error('[SW 🔨✖️] Upsss there was an error Pre-Caching: ', error);
    })
  );
});

/**
 * Tasks run by Service Worker when the [activate] event is fired
 */
self.addEventListener('activate', function(event) {
  console.info('[SW 🔨] SW has been activated!');

  event.waitUntil(
    caches.keys()
      .then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.info('[SW 🔨] Removing old cache... ', key);
            caches.delete(key);
          }
        }))
      })
  );

  return self.clients.claim();
});

/**
 * Tasks run by Service Worker when the [fetch] event is fired
 */
self.addEventListener('fetch', function(event) {
  console.info('[SW 🔨] SW has been fetched!');
  //console.warn('[SW 🔨] Loading URL => ', event.request.url);


  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        //console.info('[SW 🔨] Requesting: ', event.request);

        if (response) {
          return response;
        } else {
          // Caches dynamically the request when is not in present in the response
          return fetch(event.request)
            .then(function(res) {
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());
                  return res;
                })
            })
            .catch(function(error) {
              console.error('[SW 🔨✖️] Upsss there was an error fetching: ', error);
            })
        }
      })
  );
});


/**
 * Example method for sync data and storage temporary in IndexDB
 */
function syncData() {
  if ('serviceWorker' in navigator && 'SyncManager' in window) {
    navigator.serviceWorker.readyState
      .then(function(sw) {
        sw.sync.register('sync-meetup-post');
      });
  }
}

/**
 * When the connection come back, then the application will be sync
 */
self.addEventListener('sync', function(event) {
  console.info('[SW 🔨] The connection has been restored, now we will continue ', event);
});
