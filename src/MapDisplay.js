import React, { Component } from "react";
import * as GoogleMapsJavascriptAPI from "./GoogleMapsJavascriptAPI";


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
}
}

// componentDidUpdate() {
// if(this.state.google){
//   this.initMarkers(this.state.google, this.state.map);
// }
// }

  initMap = () => {
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

// getControlOptions = () => {
//   if(document.querySelector(".gm-style-mtc")) {
//   document.querySelector(".gm-style-mtc").parentElement.classList.add("map-type-controls");
//   console.log("Added class");
//   }
// }

//   initMarkers = (google, map) => {
//     //Instances that are going to be needed in the lower class functions
//     let bounds = new google.maps.LatLngBounds();
//     let largeInfowindow = new google.maps.InfoWindow();
//
//     //Creates the info window
//     let populateInfoWindow = (marker, infowindow) => {
//       // Check to make sure the infowindow is not already opened on this marker.
//       if (infowindow.marker != marker) {
//         infowindow.setContent('');
//         infowindow.marker = marker;
//         // Make sure the marker property is cleared if the infowindow is closed.
//         infowindow.addListener("closeclick", function() {
//           infowindow.setMarker = null;
//         });
//
//         // var streetViewService = new google.maps.StreetViewService();
//         let streetViewService = new google.maps.StreetViewService();
//         var radius = 50;
//         function getStreetView(data, status) {
//           if (status == google.maps.StreetViewStatus.OK) {
//             var nearStreetViewLocation = data.location.latLng;
//             var heading = google.maps.geometry.spherical.computeHeading(
//               nearStreetViewLocation,
//               marker.position
//             );
//             infowindow.setContent(
//               "<div>" + marker.title + '</div><div id="pano"></div>'
//             );
//             var panoramaOptions = {
//               position: nearStreetViewLocation,
//               pov: {
//                 heading: heading,
//                 pitch: 30
//               }
//             };
//             var panorama = new google.maps.StreetViewPanorama(
//               document.getElementById("test"),
//               panoramaOptions
//             );
//           } else {
//             infowindow.setContent(
//               "<div>" +
//                 marker.title +
//                 "</div>" +
//                 "<div>No Street View Found</div>"
//             );
//           }
//         }
//         // Use streetview service to get the closest streetview image within
// // 50 meters of the markers position
// streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
// // Open the infowindow on the correct marker.
// infowindow.open(map, marker);
//       }
//     };
//
//     //Loop through the places props object to display the respective markers
//     this.props.markersToDisplay.map(elem => {
//       let marker;
//       marker = new google.maps.Marker({
//         position: elem.position,
//         title: elem.name
//       });
//
//       bounds.extend(elem.position);
//
//       marker.setMap(map);
//
//       //Listeners for each marker
//       marker.addListener("click", function() {
//         populateInfoWindow(marker, largeInfowindow);
//       });
//     });
//
//     //After having finished displaying the markers
//     map.fitBounds(bounds);
//   };

  render() {


    return (
      <div className="mapContainer">
        <div id="map"></div>
      </div>
    );
  }
}

export default MapDisplay;
