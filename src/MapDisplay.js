import React, { Component } from 'react';

class MapDisplay extends Component {

state = {

}

componentDidMount() {
  this.initMap();
}


initMap = () => {
  let google = window.google;
  let map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}






render () {

  return(
    <div className="mapContainer">
<div id="map"></div>
</div>
)
}

}

export default MapDisplay;
