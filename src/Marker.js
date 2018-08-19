import React, { Component } from "react";

class Marker extends Component {
  state = {

    setOfCurrentMarkers: ""

  };

  componentDidUpdate(prevProps, prevState) {
    //this condition handles the initial rendering of the markers
    if (this.props.google != prevProps.google) {
      this.initMarkers(this.props.google, this.props.map);
    }
    //this condition handles the rendering of the markers that will follow
    if(this.props.google  && this.props.markersToDisplay !== prevProps.markersToDisplay
    ) {
  this.clearMarkers(prevState.setOfCurrentMarkers);
  this.initMarkers(this.props.google, this.props.map);

}


  }

  initMarkers = (google, map) => {
    let markersArray = [];

    if(this.props.markersToDisplay.length>0) {
    //Instances that are going to be needed in the lower class functions
    let bounds = new google.maps.LatLngBounds();
    let largeInfowindow = new google.maps.InfoWindow();

    let requestVenue = this.props.requestPlaceDetails;

    //Creates the info window
    let populateInfoWindow = (marker, infowindow) => {
      // Check to make sure the infowindow is not already opened on this marker.
      if (infowindow.marker != marker) {
        infowindow.setContent("");
        infowindow.marker = marker;
        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener("closeclick", function() {
          infowindow.setMarker = null;
        });

        // var streetViewService = new google.maps.StreetViewService();
        let streetViewService = new google.maps.StreetViewService();
        var radius = 50;
        function getStreetView(data, status) {
          if (status == google.maps.StreetViewStatus.OK) {
            var nearStreetViewLocation = data.location.latLng;
            var heading = google.maps.geometry.spherical.computeHeading(
              nearStreetViewLocation,
              marker.position
            );
            infowindow.setContent(
              "<div>" + marker.title + '</div><div id="pano"></div>'
            );
            var panoramaOptions = {
              position: nearStreetViewLocation,
              pov: {
                heading: heading,
                pitch: 30
              }
            };
            var panorama = new google.maps.StreetViewPanorama(
              document.getElementById("test"),
              panoramaOptions
            );
          } else {
            infowindow.setContent(
              "<div>" +
                marker.title +
                "</div>" +
                "<div>No Street View Found</div>"
            );
          }
        }
        // Use streetview service to get the closest streetview image within
        // 50 meters of the markers position
        streetViewService.getPanoramaByLocation(
          marker.position,
          radius,
          getStreetView
        );
        // Open the infowindow on the correct marker.
        infowindow.open(map, marker);
      }
    };

    //Loop through the places props object to display the respective markers
    this.props.markersToDisplay.map(elem => {
      let marker;
      marker = new google.maps.Marker({
        position: elem.position,
        title: elem.name
      });

      bounds.extend(elem.position);

      marker.setMap(map);

      //Listeners for each marker
      marker.addListener("click", function() {
        // UNCOMMENT THIS
        // requestVenue(elem.venueID);
        populateInfoWindow(marker, largeInfowindow);
      });

      markersArray.push(marker);
    });

    //After having finished displaying the markers
    map.fitBounds(bounds);
    console.log("markersArray", markersArray)
    this.saveMarkers(markersArray);
  }
  else if (this.props.markersToDisplay.length==0) {
   map.setCenter({ lat: 37.975543, lng: 23.734851 })
   map.setZoom(10)
  }
  };

  saveMarkers = (array) => {
    this.setState({setOfCurrentMarkers: array})
}

clearMarkers = (array) => {
  for (var i = 0; i < array.length; i++) {
          array[i].setMap(null);
        }
}

  render() {
    console.log(this.state.setOfCurrentMarkers);
    return (
      <div className="marker-container"></div>
    )
}
}

export default Marker;
