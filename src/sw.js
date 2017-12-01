// Install
self.addEventListener('install', function(event) {
  console.log('⚙️ Service Worker : Installing...');

  event.waitUntil(
    caches.open('cache_static_v1')
      .then(function(cache) {
        return cache.addAll([
          '/',
          'index.html',
          'assets/images/logo_meetup.png'
        ])
      })
  )

});

// Activated
self.addEventListener('activated', function(event) {
  console.log('⚙️ Service Worker : Activating...');
});

// Fetch
self.addEventListener('fetch', function(event) {
  // console.log('⚙️ Service Worker : Fetching... ', event.request);

  event.respondWith(
    caches.match(event.request)
      .then(function(response) {

        if (response) {
          console.info('Resourced was found : ', event.request.url);
          return response;
        } else {
          return fetch(event.request)
            .then(function(response) {
              return caches.open('cache_dynamic_v1')
                .then(function(cache) {
                  cache.put(event.request.url, response.clone());
                  return response;
                })
            })
        }
      })
      .catch(function(error) {
        console.log('Damn! this is the End of world! ', error);
      })
  )

});
