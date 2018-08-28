import React, { Component } from "react";

class Marker extends Component {
  state = {

    setOfCurrentMarkers: ""

  };

  componentDidUpdate(prevProps, prevState) {
    //this condition handles the initial rendering of the markers
    if (this.props.google !== prevProps.google) {
      console.log("Initial marker rendering")
      this.initMarkers(this.props.google, this.props.map);

    }
    //this condition handles the following marker renderings
  if(JSON.stringify(this.props.markersToDisplay) !== JSON.stringify(prevProps.markersToDisplay)) {
  this.clearMarkers(prevState.setOfCurrentMarkers);
  this.initMarkers(this.props.google, this.props.map);

}


  }

  initMarkers = (google, map) => {
    let markersArray = [];
    let windowsArray = [];

    if(this.props.markersToDisplay.length>0) {
    //Instances that are going to be needed in the lower class functions
    let bounds = new google.maps.LatLngBounds();
    let largeInfowindow = new google.maps.InfoWindow();

    let requestVenue = this.props.requestPlaceDetails;

    //Creates the info window
    let populateInfoWindow = (marker, infowindow) => {
      // Check to make sure the infowindow is not already opened on this marker.
      // windowsArray.forEach((infowindow) => {
      //   infowindow.map = null;
      // })

      if (infowindow.marker !== marker) {
        console.log(infowindow);
        infowindow.setContent("");
        infowindow.marker = "";
        infowindow.marker = marker;

        // Make sure the marker property is cleared if the infowindow is closed.
        if (infowindow.__e3_.closeclick !== {}){
          infowindow.__e3_.closeclick = {};
          infowindow.addListener("closeclick", function() {
          resetMarkers([marker]);
          infowindow.setContent("");
          infowindow.marker = null;
        });}

        // let streetViewService = new google.maps.StreetViewService();
        let streetViewService = new google.maps.StreetViewService();
        let radius = 50;
        function getStreetView(data, status) {
          if (status === google.maps.StreetViewStatus.OK) {
            let nearStreetViewLocation = data.location.latLng;
            let heading = google.maps.geometry.spherical.computeHeading(
              nearStreetViewLocation,
              marker.position
            );
            infowindow.setContent(
              `<div class="info-window-container" tabindex="-1">
              <div class="name-address-container">
              <div class="info-window-marker-title">${marker.title}</div>
              <div class="info-window-address" id="ariaAddressLabel">Address</div>
              </div>
              <div class="streetview-container" tabindex="-1" aria-hidden="true">
              <div id="pano"></div>
              </div>
              </div>`
            );
            let panoramaOptions = {
              position: nearStreetViewLocation,
              pov: {
                heading: heading,
                pitch: 30
              }
            };
            let panorama = "";
            panorama = new google.maps.StreetViewPanorama(
              document.getElementById("pano"),
              panoramaOptions
            );
          } else {
            infowindow.setContent(
              `<div class="info-window-container" tabindex="-1">
              <div class="name-address-container">
              <div class="info-window-marker-title">${marker.title}</div>
              <div class="info-window-address" id="ariaAddressLabel">Address</div>
              </div>
              <div class="streetview-container" tabindex="-1">
              <div>No Street View found</div>
              </div>
              </div>`
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
        windowsArray.push(infowindow);
        console.log("windowsArray", windowsArray);
        infowindow.open(map, marker);
      }
    };

    let resetMarkers = (array) => {
      for (let i = 0; i < array.length; i++) {

        if(array[i].animation != null) {
              array[i].setAnimation(-1);
            }

        if(array[i].icon.url !== "http://maps.google.com/mapfiles/ms/icons/red-dot.png"){
          array[i].setIcon({url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"});
            }

            console.log("reset", array[i])
      }
    }

  let toggleBounce = (marker) => {
    marker.setIcon({url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"})
    marker.setAnimation(google.maps.Animation.BOUNCE);
}


    //Loop through the places props object to display the respective markers
    this.props.markersToDisplay.map(elem => {
      let marker;
      marker = new google.maps.Marker({
        position: elem.position,
        animation: google.maps.Animation.DROP,
        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        title: elem.name,
      });

      bounds.extend(elem.position);

      marker.setMap(map);

      // //Listeners for each marker
      // marker.addListener("click", function() {
      //   toggleBounce(marker)
      //   populateInfoWindow(marker, largeInfowindow);
      //   // requestVenue(elem.venueID);
      // });

      //Listeners for each marker
        marker.addListener("click", function() {
          resetMarkers(markersArray);
          toggleBounce(marker)
          populateInfoWindow(marker, largeInfowindow);

          requestVenue(elem.venueID);

      });


      return markersArray.push(marker);
    });


    //After having finished displaying the markers
    map.fitBounds(bounds);
    this.saveMarkers(markersArray);
  }
  else if (this.props.markersToDisplay.length===0) {
   map.setCenter({ lat: 37.975543, lng: 23.734851 })
   map.setZoom(10)
  }
  };


  saveMarkers = (array) => {
    this.setState({setOfCurrentMarkers: array})
}

clearMarkers = (array) => {
  for (let i = 0; i < array.length; i++) {
          array[i].setMap(null);
        }
}

  render() {


        // let canvas = document.querySelector("canvas");
        // console.log("canvas", canvas);

    return (
      <div className="marker-container"></div>
    )
}
}

export default Marker;
