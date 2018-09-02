let staticCacheName = "athenianCache11";

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        "/",
        "/asset-manifest.json",
        "/manifest.json",
        "/static/css/main.3ee2832a.css",
        "/static/js/main.a98ac9fc.js",
        "/static/media/FoursquareLogo.dec86181.png"
      ]);
    })
  );
});


self.addEventListener("fetch", function(event) {
  event.respondWith(
        caches.open(staticCacheName).then(function(cache) {

    // First check for a match of the request in the cache
     return caches.match(event.request).then(function(response) {
      // if there is a match then respond with matched request from cache
      if (response) {
        return response;
      }

      // Cache the requests to foursquare API
      if (
        !event.request.url.includes("foursquare")
      ) {
        return fetch(event.request).then((res) => {return res;}).catch((error) => {console.log(error)});
      } else {
        let requestClone = event.request.clone();
        console.log(requestClone);

        return fetch(requestClone).then(function(response) {
          if (!response) {
            return response;
          }

          let responseClone = response.clone();
          return caches.open(staticCacheName).then(function(cache) {
            cache.put(event.request, responseClone);
            return response;
          });
        });
      }

    })
  })
);
});

// Clear old cache
self.addEventListener("activate", function(event) {
  event.waitUntil(
    //Start listening for fetches immediately
    event.waitUntil(self.clients.claim())
    ,

    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(cacheName) {
            return (
              cacheName.startsWith("athenian") &&
              cacheName !== staticCacheName
            );
          })
          .map(function(cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});
