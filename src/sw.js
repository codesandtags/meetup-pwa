/**
 * Tasks run by Service Worker when the [install] event is fired
 */
self.addEventListener('install', function (event){
  console.info('[SW 🔨] SW has been installed!');

  event.waitUntil(
    caches.open('static').then(function (cache){
      console.info('[SW 🔨] Pre-Caching static files...');
      return cache.addAll([
        '/',
        '/manifest.json',
        '/index.html',
        '/assets/images/icon/favicon-96x96.png',
        '/assets/images/logo_meetup.png'
      ]);
    }).catch(function (error){
      console.error('[SW 🔨✖️] Upsss there was an error Pre-Caching: ', error);
    })
  );
});

/**
 * Tasks run by Service Worker when the [activate] event is fired
 */
self.addEventListener('activate', function (event){
  console.info('[SW 🔨] SW has been activated!');
  return self.clients.claim();
});

/**
 * Tasks run by Service Worker when the [fetch] event is fired
 */
self.addEventListener('fetch', function (event){
  console.info('[SW 🔨] SW has been fetched!');
  event.respondWith(
    caches.match(event.request)
      .then(function (response){
        //console.info('[SW 🔨] Requesting: ', event.request);

        if (response) {
          //console.info('[SW 🔨] We have the next response: ', event.request);
          return response;
        } else {
          return fetch(event.request)
        }
      })
      .catch(function (error){
        console.error('[SW 🔨✖️] Upsss there was an error fetching: ', error);
      })
  );
});
