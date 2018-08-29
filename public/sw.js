



self.addEventListener("fetch", function(event) {
  event.respondWith(
    // First check for a match of the request in the cache
    caches.match(event.request).then(function(response) {
      // if there is a match, if the match is not of the foursquare api
       // then respond with matched request from cache, else fetch from network
       //so that the info is updated
      if (response)
      {

        if (event.request.url.includes("api.foursquare.com/v2/venues/")) {
          return fetch(event.request)
          .then((res) => {
            return res;
          }).catch(() => {
            return response;
          });
        } else {
          return response;
        }
      }
      // if there is NOT a match then fetch it from the network, but before that
      // check if it is a request for a restaurant page and if yes cache its html
      // UPDATE: I added the .json file for automatic caching bc the respective
      // request wouldn't get matched in the cache when offline...
      else {
        let requestClone = event.request.clone();

        return fetch(requestClone).then(function(response) {
          if (!response) {
            return response;
          }

          let responseClone = response.clone();
          return caches.open(cacheName).then(function(cache) {
            cache.put(event.request, responseClone);
            return response;
          });
        });
      }

      // The code following caches EVERYTHING
      //
      //   var requestClone = event.request.clone();
      //
      //   return fetch(requestClone).then(function(response) {
      //     if(!response) {
      //         console.log('[ServiceWorker] No response from fetch');
      //         return response;
      //     }
      //
      //     var responseClone = response.clone();
      //                   // Open the cache again
      //     return caches.open('staticCacheName').then(function(cache) {
      //       cache.put(event.request, responseClone);
      //       return response;
      //     })
      //
      //   }
      // )
    })
  );
});

// Clear old cache
// self.addEventListener("activate", function(event) {
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames
//           .filter(function(cacheName) {
//             return (
//               cacheName.startsWith("restaurant") &&
//               cacheName !== staticCacheName
//             );
//           })
//           .map(function(cacheName) {
//             return caches.delete(cacheName);
//           })
//       );
//     })
//   );
// });




//In the next listener the restaurant pages that have been visited by the user
// are being additionaly cached

self.addEventListener("fetch", function(event) {
  event.respondWith(
    // First check for a match of the request in the cache
    caches.match(event.request).then(function(response) {
      // if there is a match then respond with matched request from cache
      if (response) {
        return response;
      }
      // if there is NOT a match then fetch it from the network, but before that
      // check if it is a request for a restaurant page and if yes cache its html
      // UPDATE: I added the .json file for automatic caching bc the respective
      // request wouldn't get matched in the cache when offline...
      else {
        let requestClone = event.request.clone();
        console.log(requestClone);

        return fetch(requestClone).then(function(response) {
          if (!response) {
            return response;
          }

          let responseClone = response.clone();
          return caches.open(cacheName).then(function(cache) {
            cache.put(event.request, responseClone);
            return response;
          });
        });
      }

      // The code following caches EVERYTHING
      //
      //   var requestClone = event.request.clone();
      //
      //   return fetch(requestClone).then(function(response) {
      //     if(!response) {
      //         console.log('[ServiceWorker] No response from fetch');
      //         return response;
      //     }
      //
      //     var responseClone = response.clone();
      //                   // Open the cache again
      //     return caches.open('staticCacheName').then(function(cache) {
      //       cache.put(event.request, responseClone);
      //       return response;
      //     })
      //
      //   }
      // )
    })
  );
});

// Clear old cache
// self.addEventListener("activate", function(event) {
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames
//           .filter(function(cacheName) {
//             return (
//               cacheName.startsWith("restaurant") &&
//               cacheName !== staticCacheName
//             );
//           })
//           .map(function(cacheName) {
//             return caches.delete(cacheName);
//           })
//       );
//     })
//   );
// });
