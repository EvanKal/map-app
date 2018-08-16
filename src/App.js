import React, { Component } from "react";
import logo from "./logo.svg";
import * as GoogleMapsJavascriptAPI from "./GoogleMapsJavascriptAPI";
import MapDisplay from "./MapDisplay";
import ContentsList from "./ContentsList";
import ExtraInfo from "./ExtraInfo";
import "./App.css";

class App extends Component {
  state = {
    gotGoogle: false,
    places: [
      {
        name: "Yasemi",
        placeID: "ChIJRYyc_he9oRQR6_ZAlXl2sQo",
        position: { lat: 37.9748486, lng: 23.7267974 }
      },
      {
        name: "Couleur Locale",
        placeID: "ChIJYzvSVSK9oRQRTEIOJt4Ka48",
        position: { lat: 37.9754321, lng: 23.7257031 }
      },
      {
        name: "Psyrra",
        placeID: "ChIJ7e4WDiO9oRQRoIthg-iTr4g",
        position: { lat: 37.9779004, lng: 23.7253016 }
      },
      {
        name: "SPOLLATI",
        placeID: "ChIJvR6Zyzy9oRQR8uUVFK6LxnI",
        position: { lat: 37.97739900000001, lng: 23.72772 }
      },
      {
        name: "Dióskouroi",
        placeID: "ChIJFyp7ZRi9oRQRV2-Jz58hYJ4",
        position: { lat: 37.973493, lng: 23.725295 }
      }
    ]

    // places: [
    //   {name:"Yasemi", placeID: "ChIJRYyc_he9oRQR6_ZAlXl2sQo", position:{lat: 37.9748486, lng: 23.7267974}},
    //   {name:"Couleur Locale", placeID: "ChIJYzvSVSK9oRQRTEIOJt4Ka48", position:{lat: 37.9754321, lng: 23.7257031}},
    //   {name:"Psyrra", placeID: "ChIJ7e4WDiO9oRQRoIthg-iTr4g", position:{lat: 37.9779004, lng: 23.7253016}},
    //   {name:"SPOLLATI", placeID: "ChIJvR6Zyzy9oRQR8uUVFK6LxnI", position:{lat: 37.9777605, lng: 23.7276444}},
    //   {name:"Dióskouroi", placeID: "ChIJFyp7ZRi9oRQRV2-Jz58hYJ4", position:{lat: 37.973493, lng: 23.725295}}
    // ]
  };
  // <div id="map"></div>
  // <script>
  //   var map;
  //   function initMap() {
  //     map = new google.maps.Map(document.getElementById('map'), {
  //       center: {lat: -34.397, lng: 150.644},
  //       zoom: 8
  //     });
  //   }
  // </script>
  // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGq10MXHRFvjFmCRXKANM5yMZk6dXaGAo&callback=initMap"
  // async defer></script>

  componentDidMount() {
    GoogleMapsJavascriptAPI.getAPI()
      .then(res => {
        this.createScriptTag(res);
      })
      .then(() => {
        this.setState({gotGoogle: true});
      });
  }

  createScriptTag = (content) => {
    let scriptTag = document.createElement("script");
    scriptTag.setAttribute("type", "text/javascript");
    scriptTag.innerHTML = content;
    document.querySelector("body").appendChild(scriptTag);
  };

  render() {
    console.log(this.state.gotGoogle);
    return (
      <div className="App">
        <ContentsList />
        <MapDisplay gotGoogle={this.state.gotGoogle} markersToDisplay={this.state.places} />
        <ExtraInfo />
      </div>
    );
  }
}

export default App;
