import React, { Component } from "react";
import Marker from "./Marker";

class MapDisplay extends Component {
  state = {
    doUpdate: false,
    googleInMaps: "",
    mapInMaps: ""
  };

  componentDidUpdate(prevState, prevProps) {
    if(!this.state.doUpdate){
      this.setState(() => {
        let google = window.google;
        let map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 37.975543, lng: 23.734851 },
          zoom: 8
        });
        return {doUpdate: true, googleInMaps: google, mapInMaps: map}
        })
  }
}

  initMap = () => {

    let google= window.google;
    let map;

    map = this.state.map;
    // this.setState({doUpdate: true, googleInMaps: google, mapInMaps: map})
    // this.setState((prevState) => {
    //   if (!prevState.doUpdate) {
    //     return {doUpdate: true, googleInMaps: google, mapInMaps: map}
    //   }
    // })

    // this.initMarkers(google, map);
  };


  render() {

    console.log(this.state)

    return (
      <div className="mapContainer">
        <div id="map">
        {this.props.gotGoogle && (

        this.initMap(),
        this.props.markersToDisplay.map((elem) => {
          console.log("HEY")
        let mark= elem;

        return (
          <Marker
          key={elem.name}
          markerToBeDisplayed={mark}
          google={this.state.googleInMaps}
          map={this.state.mapInMaps}
          />

        )
        })


        )}
        </div>
      </div>
    );
  }
}

export default MapDisplay;
