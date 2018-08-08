import React, { Component } from "react";
import Marker from "./Marker";

class MapDisplay extends Component {
  state = {};

  componentDidMount() {
    this.initMap();
  }

  initMap = () => {
    let google = window.google;
    let map;
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.975543, lng: 23.734851 },
      zoom: 8
    });
    this.initMarkers(google, map);
  };

  initMarkers = (google, map) => {
    //Instances that are going to be needed in the lower class functions
    let bounds = new google.maps.LatLngBounds();
    let largeInfowindow = new google.maps.InfoWindow();

    //Creates the info window
    let populateInfoWindow = (marker, infowindow) => {
      // Check to make sure the infowindow is not already opened on this marker.
      if (infowindow.marker != marker) {
        infowindow.setContent('');
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
            console.log("hi");
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
streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
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
        populateInfoWindow(marker, largeInfowindow);
      });
    });

    //After having finished displaying the markers
    map.fitBounds(bounds);
  };

  render() {
    return (
      <div className="mapContainer">
        <div id="map" />
      </div>
    );
  }
}

export default MapDisplay;
