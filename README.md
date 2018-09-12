# AtheniaN Project

This is a single page app that displays information about my favourite
places to eat and grab a snack in Athens. The app has been devoloped using REACT.

## Install
In Dev mode
* Install all project dependencies with `npm install`
  ** All dependencies will be automatically installed through the package.json file
* Start the development server with `npm start`

In production mode
* View the production version of the app by serving the files inside the build directory to your browser. This is where the service worker may be tested.
  ** To do that you can use a simple local server like the "Web server for Chrome" extension, available at the chrome store.
* Viewing in an incognito window is recommended and make sure all previous service workers installed for your serving port are unregistered.

## Third Party API

All information about the locations, are currently retrieved through the Foursquare API

## Page styling

The page has a different display pattern than that of the DOM tree. The DOM tree follows an accessibility first logic. The rendered page layout has been altered using flexbox.

## Service worker

The page utilizes a custom service worker. The Sw caches all the static affordances of the site as well as requests&response pairs to the Foursquare venues API, so that the info is available offline. The map is not being cached due to heavy load on the cache.

##Testing the Service worker

In order to test the SW local serve the files in build directory. Make sure you test the service worker in a new Incognito Window and that no past service workers for the port are still registered. In case build is run again replace the new "service-worker.js" generated in the root build directory with the one in the root of the mapapp directory. Also make sure the precached file names for "main.*.js" and "main.*.css" match the ones in the static folder produced by build, because if there have been changes in the code during development, these files will be generated with new names.

Note: the service worker caches all the static dependencies of the app plus the requests/responses to the foursquare API. The google map is not cached due to heavy load on the cache.
