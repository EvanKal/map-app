import React, { Component } from "react";
import * as AthenianAPIs from "./AthenianAPIs";
import MapDisplay from "./MapDisplay";
import ContentsList from "./ContentsList";
import ExtraInfo from "./ExtraInfo";
import Marker from "./Marker";
import BurgerMenuIcon from "./BurgerMenuIcon";
import escapeRegExp from "escape-string-regexp";
import { Route } from "react-router-dom";
import "./App.css";
import "./Responsive.css";

//From running npm build
import logo from "./logo.svg";

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
        position: { lat: 37.9774696, lng: 23.7277225 }
      },
      {
        name: "Dióskouroi",
        placeID: "ChIJFyp7ZRi9oRQRV2-Jz58hYJ4",
        venueID: "4b7c1594f964a520f47b2fe3",
        position: { lat: 37.973493, lng: 23.725295 }
      }
    ]
  };

  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      this.regSW();
    }
    this.resetExtraInfo();
      if(window.google) {
        this.setState(() => {
          let google = window.google;
          let map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 37.975543, lng: 23.734851 },
            zoom: 8,
            mapTypeControlOptions: {
              mapTypeIds: [
                "roadmap",
                "satellite",
                "hybrid",
                "terrain",
                "styled_map"
              ]
            }
          });
          return { google: google, map: map, gotGoogle: true };
        });
      } else {
          this.mapOverlay();
          this.extraInfoOverlay();
      }
  }

  regSW = () => {
  window.addEventListener("load", () => {
  if (!navigator.serviceWorker) return;
  if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js').then(function() { console.log("Service Worker Registered!"); });
  };
    })
  }
  updateQueryInApp = query => {
    this.setState({ queryInApp: query });
    this.resetExtraInfo();
  };

  placesRendered = query => {
    let placesArray = [];
    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      placesArray = this.state.places.filter(place => match.test(place.name));
      return placesArray;
    } else {
      return this.state.places;
    }
  };

  requestPlaceDetails = id => {
    AthenianAPIs.fourSquareAPI(id)
      .then(res => {
        document
          .querySelector(".extra-info-overlay")
          .classList.add("hide-overlay");
        this.fillExtraInfo(res);
      })
      .catch(error => {
        console.log(error);
        this.extraInfoOverlay();
      });
  };

  mapOverlay = () => {
    let mapOverlay = document.createElement("div");
    let mapOverlayText = document.createElement("p");
    mapOverlayText.innerHTML = "Network Error! Failed to retrieve map.";

    mapOverlay.setAttribute("class", "map-overlay");
    mapOverlayText.setAttribute("class", "map-overlay-text");

    mapOverlay.appendChild(mapOverlayText);
    document.querySelector("#map").appendChild(mapOverlay);
  };

  extraInfoOverlay = () => {
    this.resetExtraInfo();
    let extraInfoOverlay = document.querySelector(".extra-info-overlay");
    extraInfoOverlay.classList.remove("hide-overlay");
    extraInfoOverlay.querySelector(
      ".overlay-text"
    ).innerHTML = `Network Error! Nothing to display...`;
  };

  resetExtraInfo = () => {
    document.querySelector(".place-name").innerHTML = "";
    document.querySelector(".place-name").removeAttribute("tabindex");
    document.querySelector(".place-name").removeAttribute("tabindex");

    if (document.querySelector(".place-image").hasAttribute("src")) {
      document.querySelector(".place-image").removeAttribute("src");
      document.querySelector(".place-image").removeAttribute("alt");
      document.querySelector(".place-image").removeAttribute("tabindex");
    }
    document.querySelector(".type").innerHTML = "";
    document.querySelector(".type").removeAttribute("tabindex");
    document.querySelector(".menu").innerHTML = "";
    document.querySelector(".menu").removeAttribute("tabindex");
    document.querySelector(".rating").innerHTML = "";
    document.querySelector(".rating").removeAttribute("tabindex");
    document.querySelector(".likes").innerHTML = "";
    document.querySelector(".likes").removeAttribute("tabindex");
    document.querySelector(".listed").innerHTML = "";
    document.querySelector(".listed").removeAttribute("tabindex");
    document.querySelector(".working-hours-text").innerHTML = "";
    document.querySelector(".working-hours-text").removeAttribute("tabindex");
    document.querySelector(".working-hours").innerHTML = "";
    document.querySelector(".working-hours").removeAttribute("tabindex");
    document.querySelector(".overlay-text").innerHTML = `Click on a marker!`;
    document
      .querySelector(".extra-info-overlay")
      .classList.remove("hide-overlay");
  };

  fillExtraInfo = place => {
    if (place) {
      let createHoursTable = array => {
        let hoursContainer = document.querySelector(".working-hours");
        hoursContainer.innerHTML = "";
        let fragment = document.createDocumentFragment();

        array.forEach(elem => {
          let row = document.createElement("tr");

          const day = document.createElement("td");
          day.innerHTML = elem.days;
          row.appendChild(day);

          const time = document.createElement("td");
          let timeText = "";
          elem.open.forEach(hour => {
            timeText = timeText + hour.renderedTime;
          });
          time.innerHTML = timeText;
          row.appendChild(time);

          row.setAttribute("tabindex", "0");
          row.setAttribute("aria-atomic", "true");

          fragment.appendChild(row);
        });

        hoursContainer.appendChild(fragment);
      };

      let displayBestImage = (image, name) => {
        let imageElement = document.querySelector(".place-image");
        let imageUrl = `${image.prefix}original${image.suffix}`;
        imageElement.setAttribute("tabindex", "0");
        imageElement.setAttribute("src", imageUrl);
        imageElement.setAttribute("alt", `Image of ${name}`);
      };

      let displayAddress = address => {
        let addressContainer = document.querySelector(".info-window-address");

        if (document.body.contains(addressContainer)) {
          let addressText = "";

          address.formattedAddress.forEach(elem => {
            addressText = `${addressText} ${elem}`;
          });

          addressContainer.innerHTML = addressText;
        }
      };

      //Set the name
      if (place.hasOwnProperty("name")) {
        document.querySelector(".place-name").innerHTML = place.name;
        document.querySelector(".place-name").setAttribute("tabindex", "0");
      }

      //Set the image
      if (place.hasOwnProperty("bestPhoto")) {
        displayBestImage(place.bestPhoto, place.name);
      } else {
        document.querySelector(".best-image-container").innerHTML =
          "Image not available";
        document
          .querySelector(".best-image-container")
          .setAttribute("tabindex", "0");
      }

      //Set the type of the place
      if (place.hasOwnProperty("categories")) {
        document.querySelector(".type").innerHTML = place.categories[0].name;
        document.querySelector(".type").setAttribute("tabindex", "0");
      }

      //Set the menu
      if (place.hasOwnProperty("attributes")) {
        let attributeObj;
        attributeObj = place.attributes.groups.filter(elem => {
          let elemObj = elem;
          return Object.values(elemObj).includes("serves");
        });
        if (attributeObj.length > 0) {
          document.querySelector(".menu").innerHTML = attributeObj[0].summary;
          document.querySelector(".menu").setAttribute("tabindex", "0");
        }
      }

      //Set the metrics
      if (place.hasOwnProperty("rating")) {
        document.querySelector(".rating").innerHTML = `Rating: ${place.rating}`;
        document.querySelector(".rating").setAttribute("tabindex", "0");
      }
      if (place.hasOwnProperty("likes")) {
        document.querySelector(".likes").innerHTML = `Likes: ${
          place.likes.count
        }`;
        document.querySelector(".likes").setAttribute("tabindex", "0");
      }
      if (place.hasOwnProperty("listed")) {
        document.querySelector(".listed").innerHTML = `Listed: ${
          place.listed.count
        } times`;
        document.querySelector(".listed").setAttribute("tabindex", "0");
      }

      //Set the timetable
      if (place.hasOwnProperty("popular")) {
        if (place.popular.hasOwnProperty("timeframes")) {
          document.querySelector(".working-hours-text").innerHTML =
            "Working Hours";
          document
            .querySelector(".working-hours-text")
            .setAttribute("tabindex", "0");
          createHoursTable(place.popular.timeframes);
        }
      } else {
        document.querySelector(".working-hours-text").innerHTML =
          "Working Hours";
        document
          .querySelector(".working-hours-text")
          .setAttribute("tabindex", "0");
        let hoursContainer = document.querySelector(".working-hours");
        hoursContainer.setAttribute("tabindex", "0");
        hoursContainer.innerHTML = "Working hours not available";
      }

      //Set address in Info InfoWindow

      if (place.hasOwnProperty("location")) {
        displayAddress(place.location);
      } else {
        document.querySelector(".info-window-address").innerHTML =
          "No address available";
      }
    }
  };

  render() {
    const { queryInApp } = this.state;

    return (
      <div >
      <Route
  exact
  path="/"
  render={() => (
<div className="App">
        <ExtraInfo />

        <MapDisplay
          markersToDisplay={this.placesRendered(queryInApp)}
          gotGoogle={this.state.gotGoogle}
          google={this.state.google}
          map={this.state.map}
        />

        <Marker
          markersToDisplay={this.placesRendered(queryInApp)}
          requestPlaceDetails={this.requestPlaceDetails}
          google={this.state.google}
          map={this.state.map}
        />

        <BurgerMenuIcon />

        <ContentsList
          markersInList={this.placesRendered(queryInApp)}
          updateQueryInApp={this.updateQueryInApp}
          google={this.state.google}
        />
        </div>
      )}
      />
      </div>
    );
  }
}

export default App;
