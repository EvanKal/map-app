import React, { Component } from "react";


class MapDisplay extends Component {
  state = {
    google: "",
    map: ""
  };

// to be deleted
// componentDidMount() {
//   GoogleMapsJavascriptAPI.fourSquareAPI("4c9767007605199c9799c8a3")
//   .then((res) => {
//     console.log("response", res);
//   })
// }

  componentDidUpdate(prevProps) {
    if(this.props.google !== prevProps.google){
    console.log("Rendering Map...")
    this.initMap();
    this.accessibilityMapOptions();
}
}

// accessibilityMarkerOptions = (markers) => {
//   if(markers.length>0){
//   let marker = "";
//
// markers.forEach((place) => {
//   marker = document.querySelector(`div[title='${place.name}']`);
//   console.log("!!!", marker);
//   // marker.setAttribute("tabindex", "0");
// })
// }
// }
//




  accessibilityMapOptions = () => {
  let map = document.querySelector("#map");
  // let markersAr = this.props.markersToDisplay;


  map.addEventListener("DOMSubtreeModified", () => {
  let aTag = map.querySelector("div a[title='Click to see this area on Google Maps']");
  let aTags = map.querySelectorAll("div.gmnoprint a");
  let buttons = map.querySelectorAll(".gm-control-active");
  let gmstylediv = map.querySelector("div[tabindex='0']");
  let gmstyledivaddresslink = map.querySelectorAll("div.streetview-container a");
  let iframe = map.querySelector("iframe");



  if (aTag !== null) {
    aTag.setAttribute("tabindex", "-1");
  }

  if (gmstylediv !== null) {
    gmstylediv.setAttribute("tabindex", "-1");
  }

  if (iframe !== null) {
    iframe.setAttribute("tabindex", "-1");

    // markersAr.forEach((place) => {
    //   let marker = document.querySelector(`div[title='${place.name}']`);
    //   if (marker && !marker.hasAttribute("tabindex")) {
    //     console.log(marker);
    //     marker.setAttribute("tabindex", "0");
    //   } else {return;}
    // })
  }

    if(aTags !== null) {
      Array.from(aTags).forEach((elem) => {
          elem.setAttribute("tabindex", "-1");
        });
    }

    if (buttons !== null) {
      Array.from(buttons).forEach((elem) => {
      elem.setAttribute("tabindex", "-1");

    })
  }

  if (gmstyledivaddresslink !== null) {
    Array.from(gmstyledivaddresslink).forEach((elem) => {
    elem.setAttribute("tabindex", "-1");

  })
  }

  //    &&
  //   !aTag.hasAttribute("tabindex")
  // ) {
  //
  //
  // console.log("atags!!!", aTags);
  // console.log("atag!!!", aTag);
  // console.log("buttons!!!", buttons);

});
}



  initMap = (res) => {
    // let getCntlOpts = this.getControlOptions();
     var styledMapType = new this.props.google.maps.StyledMapType(
       [
         {
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#f5f5f5"
             }
           ]
         },
         {
           "elementType": "labels.icon",
           "stylers": [
             {
               "visibility": "off"
             }
           ]
         },
         {
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#616161"
             }
           ]
         },
         {
           "elementType": "labels.text.stroke",
           "stylers": [
             {
               "color": "#f5f5f5"
             }
           ]
         },
         {
           "featureType": "administrative",
           "elementType": "geometry",
           "stylers": [
             {
               "visibility": "off"
             }
           ]
         },
         {
           "featureType": "administrative.land_parcel",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#bdbdbd"
             }
           ]
         },
         {
           "featureType": "poi",
           "stylers": [
             {
               "visibility": "off"
             }
           ]
         },
         {
           "featureType": "poi",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#eeeeee"
             }
           ]
         },
         {
           "featureType": "poi",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#757575"
             }
           ]
         },
         {
           "featureType": "poi.park",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#e5e5e5"
             }
           ]
         },
         {
           "featureType": "poi.park",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#9e9e9e"
             }
           ]
         },
         {
           "featureType": "poi.sports_complex",
           "stylers": [
             {
               "color": "#fed7b4"
             }
           ]
         },
         {
           "featureType": "road",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#f1e3dd"
             }
           ]
         },
         {
           "featureType": "road",
           "elementType": "labels.icon",
           "stylers": [
             {
               "visibility": "off"
             }
           ]
         },
         {
           "featureType": "road.arterial",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#757575"
             }
           ]
         },
         {
           "featureType": "road.highway",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#dadada"
             }
           ]
         },
         {
           "featureType": "road.highway",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#616161"
             }
           ]
         },
         {
           "featureType": "road.local",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#9e9e9e"
             }
           ]
         },
         {
           "featureType": "transit",
           "stylers": [
             {
               "visibility": "off"
             }
           ]
         },
         {
           "featureType": "transit.line",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#e5e5e5"
             }
           ]
         },
         {
           "featureType": "transit.station",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#eeeeee"
             }
           ]
         },
         {
           "featureType": "water",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#87bdd8"
             }
           ]
         },
         {
           "featureType": "water",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#9e9e9e"
             }
           ]
         }
       ],
      {name: 'Styled Map'});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  let newMap = this.props.map;

  //Associate the styled map with the MapTypeId and set it to display.
    newMap.mapTypes.set('styled_map', styledMapType);
    newMap.setMapTypeId('styled_map');

  // let promise1 = new Promise(function(resolve, reject) {
  //   newMap.mapTypes.set('styled_map', styledMapType);
  //   newMap.setMapTypeId('styled_map');
  //   resolve;
  // })
  //
  // promise1.then((resolve) => {
  //   return getCntlOpts;
  // })
};



  render() {


    return (
      <div className="mapContainer" tabIndex ="0" role="application" aria-label="map of the city of Athens, displaying the available markers">
        <div id="map" aria-hidden="true" tabIndex="-1"></div>
      </div>
    );
  }
}

export default MapDisplay;
