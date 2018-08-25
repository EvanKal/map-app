import React, { Component } from "react";
import logo from "./logo.svg";
import * as GoogleMapsJavascriptAPI from "./GoogleMapsJavascriptAPI";
import MapDisplay from "./MapDisplay";
import ContentsList from "./ContentsList";
import ExtraInfo from "./ExtraInfo";
import Marker from "./Marker";
import BurgerMenuIcon from "./BurgerMenuIcon";
import escapeRegExp from 'escape-string-regexp'
import "./App.css";

class App extends Component {
  state = {
    queryInApp: "",
    gotGoogle: false,
    google: "",
    map: "",
    places: [
      {
        name: "Yiasemi",
        placeID: "ChIJRYyc_he9oRQR6_ZAlXl2sQo",
        venueID: "4c9767007605199c9799c8a3",
        position: { lat: 37.9748486, lng: 23.7267974 }
      },
      {
        name: "Couleur Locale",
        placeID: "ChIJYzvSVSK9oRQRTEIOJt4Ka48",
        venueID: "53df3977498e478b05bb4452",
        position: { lat: 37.9754321, lng: 23.7257031 }
      },
      {
        name: "Psyrra",
        placeID: "ChIJ7e4WDiO9oRQRoIthg-iTr4g",
        venueID: "4d41c506255d8cfa88c87305",
        position: { lat: 37.9779004, lng: 23.7253016 }
      },
      {
        name: "SPOLLATI",
        placeID: "ChIJvR6Zyzy9oRQR8uUVFK6LxnI",
        venueID: "51fac8e4498e8efa6e342d0d",
        position: { lat: 37.9774696, lng: 23.7277225}
      },
      {
        name: "Dióskouroi",
        placeID: "ChIJFyp7ZRi9oRQRV2-Jz58hYJ4",
        venueID: "4b7c1594f964a520f47b2fe3",
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
    // document.addEventListener("click", (event) => {
    //   console.log(event.target) ;
    // })
    GoogleMapsJavascriptAPI.getAPI()
      .then(res => {
        this.createScriptTag(res);
      })
      .then(() => {
        this.setState(() => {
          let google = window.google
          let map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 37.975543, lng: 23.734851 },
            zoom: 8,
            mapTypeControlOptions: {
              mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                      'styled_map']
            }

          })
          return {google: google, map: map, gotGoogle: true};
      });
    });
  }

  createScriptTag = (content) => {
    let scriptTag = document.createElement("script");
    scriptTag.setAttribute("type", "text/javascript");
    scriptTag.innerHTML = content;
    document.querySelector("body").appendChild(scriptTag);
  };

  updateQueryInApp = (query) => {
    this.setState({ queryInApp: query })
  }

  placesRendered = (query) => {
    let placesArray = [];
    if(query) {
      const match = new RegExp(escapeRegExp(query), 'i')
  placesArray = this.state.places.filter((place) => match.test(place.name));
  return placesArray;
    } else {
      return this.state.places;
    }
  }

  requestPlaceDetails = (id) => {
    GoogleMapsJavascriptAPI.fourSquareAPI(id)
    .then((res) => {
      console.log("response", res);
      this.fillExtraInfo(res);
    })
  }

  fillExtraInfo = (place) => {

    let createHoursTable = (array) => {
      let hoursContainer = document.querySelector(".working-hours");
      hoursContainer.innerHTML = "";
      let fragment = document.createDocumentFragment();

      array.forEach((elem) => {
        let row = document.createElement("tr");

        const day = document.createElement('td');
        day.innerHTML = elem.days;
        row.appendChild(day);

        const time = document.createElement('td');
        let timeText = "";
        elem.open.forEach((hour) => {
          timeText = timeText + hour.renderedTime;
        })
        time.innerHTML = timeText;
        row.appendChild(time);

        fragment.appendChild(row);

      })

      console.log(fragment);
      hoursContainer.appendChild(fragment);

    }

    let displayBestImage = (image, name) => {
        let imageElement = document.querySelector(".place-image");
        let imageUrl = `${image.prefix}original${image.suffix}`;
        imageElement.setAttribute("src", imageUrl);
        imageElement.setAttribute("alt", `Image of ${name}`);
      }

    let displayAddress = (address) => {
      let addressContainer = document.querySelector(".info-window-address");

      if (document.body.contains(addressContainer)){
      let addressText = "";

      address.formattedAddress.forEach((elem) => {
        addressText = `${addressText} ${elem}`
      })

      addressContainer.innerHTML = addressText;
    }
    }


//Set the name
    document.querySelector(".place-name").innerHTML = place.name;

//Set the image
    if(place.hasOwnProperty("bestPhoto")) {
    displayBestImage(place.bestPhoto, place.name);
    } else {
      document.querySelector(".best-image-container").innerHTML = "Image not available";
    }

//Set the type of the place
    document.querySelector(".type").innerHTML = place.categories[0].name;

//Set the menu
    if(place.attributes.groups.length >= 5)
    {
      document.querySelector(".menu").innerHTML = place.attributes.groups[5].summary;
    }

//Set the metrics
    document.querySelector(".rating").innerHTML = `Rating: ${place.rating}`;
    document.querySelector(".likes").innerHTML = `Likes: ${place.likes.count}`;
    document.querySelector(".listed").innerHTML = `Listed: ${place.listed.count} times`;

//Set the timetable
    createHoursTable(place.popular.timeframes);

//Set address in Info InfoWindow

  if(place.hasOwnProperty("location")) {
    displayAddress(place.location);
  } else {
    let addressContainer = document.querySelector(".info-window-address").innerHTML = "No address available"
  }
  }


  render() {
    const {queryInApp} = this.state

console.log("queryInApp", this.state.queryInApp)

    return (
      <div className="App">

        <BurgerMenuIcon />

        <ContentsList
        markersInList={this.placesRendered(queryInApp)}
        updateQueryInApp={this.updateQueryInApp} />

        <MapDisplay
        gotGoogle={this.state.gotGoogle}
        google={this.state.google}
        map={this.state.map} />

        <Marker
        markersToDisplay={this.placesRendered(queryInApp)}
        requestPlaceDetails={this.requestPlaceDetails}
        google={this.state.google}
        map={this.state.map} />

        <ExtraInfo />

      </div>
    );
  }
}

export default App;
