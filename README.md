# AtheniaN Project

This is a single page app that displays information about my favourite
places to eat and grab a snack in Athens. The app has been devoloped using REACT.

## Install

* install all project dependencies with `npm install`
  ** All dependencies will be automatically installed through the package.json file
* start the development server with `npm start`

## Third Party API

All information about the locations, are currently retrieved through the Foursquare API

## Page styling

The page has a different display pattern than that of the DOM tree. The DOM tree follows an accessibility first logic. The rendered page layout has been altered using flexbox.

## Service worker

The page utilizes a custom service worker. The file has been created by the build proccess, but it has been fully customized. The Sw caches all the static affordances of the site as well as requests&response pairs to the Foursquare venues API, so that the info is available offline. The map is not being cached due to heavy load on the cache.
