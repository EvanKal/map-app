import React, { Component } from 'react';
import logo from './logo.svg';
import * as GoogleMapsJavascriptAPI from "./GoogleMapsJavascriptAPI";
import MapDisplay from "./MapDisplay";
import ContentsList from "./ContentsList";
import ExtraInfo from "./ExtraInfo";
import './App.css';

class App extends Component {

  state = {
    places: [
      {name:"Yasemi", position:{lat: 37.9748486, lng: 23.7267974}},
      {name:"Couleur Locale", position:{lat: 37.9754321, lng: 23.7257031}},
      {name:"Psyrra", position:{lat: 37.9779004, lng: 23.7253016}},
      {name:"SPOLLATI", position:{lat: 37.9777605, lng: 23.7276444}},
      {name:"Dióskouroi", position:{lat: 37.973493, lng: 23.725295}}
    ]
  }
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

  // componentDidMount() {
  //   GoogleMapsJavascriptAPI.getAll().then((res) => {
  //     console.log(res)
  //
  //     res.body();
  //   });
  // }


// initMap = () => {
//   let google = window.google;
//   let map;
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
//
// }


  render() {



    return (
      <div className="App">
      <ContentsList />
      <MapDisplay markersToDisplay={this.state.places}/>
      <ExtraInfo />
      </div>
    );
  }
}

export default App;
