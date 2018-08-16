import React, { Component } from 'react';

class Marker extends Component {

state = {

}

// componentDidUpdate(prevProps) {
//   if(prevProps.google !== this.props.google) {
//     return;
//   }
// }

// initMarkers = (google, map) => {
//   console.log("eleos")
//   google = window.google;
//
//   //Instances that are going to be needed in the lower class functions
//   let bounds = new google.maps.LatLngBounds();
//   let largeInfowindow = new google.maps.InfoWindow();
//
//   //Creates the info window
//   let populateInfoWindow = (marker, infowindow) => {
//     // Check to make sure the infowindow is not already opened on this marker.
//     if (infowindow.marker != marker) {
//       infowindow.setContent('');
//       infowindow.marker = marker;
//       // Make sure the marker property is cleared if the infowindow is closed.
//       infowindow.addListener("closeclick", function() {
//         infowindow.setMarker = null;
//       });
//
//       // var streetViewService = new google.maps.StreetViewService();
//       let streetViewService = new google.maps.StreetViewService();
//       var radius = 50;
//       function getStreetView(data, status) {
//         if (status == google.maps.StreetViewStatus.OK) {
//           console.log("hi");
//           var nearStreetViewLocation = data.location.latLng;
//           var heading = google.maps.geometry.spherical.computeHeading(
//             nearStreetViewLocation,
//             marker.position
//           );
//           infowindow.setContent(
//             "<div>" + marker.title + '</div><div id="pano"></div>'
//           );
//           var panoramaOptions = {
//             position: nearStreetViewLocation,
//             pov: {
//               heading: heading,
//               pitch: 30
//             }
//           };
//           var panorama = new google.maps.StreetViewPanorama(
//             document.getElementById("test"),
//             panoramaOptions
//           );
//         } else {
//           infowindow.setContent(
//             "<div>" +
//               marker.title +
//               "</div>" +
//               "<div>No Street View Found</div>"
//           );
//         }
//       }
//       // Use streetview service to get the closest streetview image within
// // 50 meters of the markers position
// streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
// // Open the infowindow on the correct marker.
// infowindow.open(map, marker);
//     }
//   };
//
//     let marker;
//     marker = new google.maps.Marker({
//       position: this.props.markerToBeDisplayed.position,
//       title: this.props.markerToBeDisplayed.name
//     });
//
//     // bounds.extend(elem.position);
//
//     marker.setMap(map);
//
//     //Listeners for each marker
//     marker.addListener("click", function() {
//       populateInfoWindow(marker, largeInfowindow);
//     });
//
//
//   //After having finished displaying the markers
//   // map.fitBounds(bounds);
// };


initMarkers = (google, tribeca, map) => {
  var marker = new this.props.google.maps.Marker({
  position: this.props.markerToBeDisplayed.position,
  map: this.props.map,
  title: this.props.markerToBeDisplayed.name

})
}






render () {

  return(
    <div className="marker-container" onClick={() => console.log("Hello!")}>
    {this.props.google && (this.initMarkers())}
    </div>
)
}

}

export default Marker;
