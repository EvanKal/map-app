import React, { Component } from "react";

class ExtraInfo extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="extra-info">
        <div className="app-title-container" tabIndex="0" role="banner">
          <h1 tabIndex="-1">
            <a className="app-title" href="/" tabIndex="0">
              AtheniaN
            </a>
          </h1>
        </div>
        <div className="extra-info-subcontainer">
          <div
            className="place-name-container"
            style={{
              backgroundImage: "url(" + require("./FoursquareLogo.png") + ")"
            }}
          >
            <h2 className="place-name">Place Name</h2>
          </div>
          <div className="helping-image-container">
            <div className="best-image-container">
              <img className="place-image" alt="" />
            </div>
          </div>
          <div className="type-container">
            <p className="type">Category</p>
          </div>
          <div className="menu-container">
            <p className="menu">Menu/Serves</p>
          </div>
          <div className="metrics">
            <p className="rating">rating</p>
            <p className="likes">likes</p>
            <p className="listed">listed</p>
          </div>
          <div className="working-hours-container">
            <p className="working-hours-text">Working Hours</p>
            <div className="table-container">
              <table className="working-hours" />
            </div>
          </div>
          <div className="extra-info-overlay">
            <p className="overlay-text">Click on a marker!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ExtraInfo;
