var CACHE_STATIC_NAME = 'static-v1';
var CACHE_DYNAMIC_NAME = 'dynamic-v1';


/**
 * Tasks run by Service Worker when the [install] event is fired
 */
self.addEventListener('install', function(event) {
  console.info('[SW 🔨] SW has been installed!');

  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(function(cache) {
      console.info('[SW 🔨] Pre-Caching static files...');
      return cache.addAll([
        '/',
        '/manifest.json',
        '/index.html',
        '/assets/images/404.png',
        '/assets/images/logo_meetup.png'
      ]);
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
