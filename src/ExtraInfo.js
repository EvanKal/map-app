import React, { Component } from "react";

class ExtraInfo extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="extra-info">
        <h2 className="place-name">Place Name</h2>
        <div className="streetViewContainer">
          <p>Street View</p>
          <div id="test" />
        </div>
        <div className="type">Category</div>
        <div className="menu">Menu/Serves</div>
        <div className="metrics">
          <p className="rating">rating</p>
          <p className="likes">likes</p>
          <p className="listed">listed</p>
        </div>
        <table className="working-hours"></table>
      </div>
    );
  }
}

export default ExtraInfo;
