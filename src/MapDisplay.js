import React, { Component } from "react";

class MapDisplay extends Component {
  state = {
    google: "",
    map: ""
  };


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
     let newMap = this.props.map;
};

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

console.log("propgoogle", this.props.google)

    return (
      <div className="mapContainer">
        <div id="map"></div>
      </div>
    );
  }
}

export default MapDisplay;
