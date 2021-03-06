import React, { Component } from "react";

class BurgerMenuIcon extends Component {
  componentDidMount() {
    this.accessibilityBurgerMenuOptions();
  }

  toggleClasses = () => {
    document.querySelector(".menu-icon-container").classList.toggle("x-icon");
    document.querySelector(".contents-list").classList.toggle("move");
  };

  accessibilityBurgerMenuOptions = () => {
    document
      .querySelector(".menu-icon-container")
      .addEventListener("keyup", event => {
        if (event.keyCode === 13) {
          document.querySelector(".contents-list").classList.toggle("move");
          document
            .querySelector(".menu-icon-container")
            .classList.toggle("x-icon");
        }
      });
  };

  render() {
    return (
      <div
        className="menu-icon-container"
        onClick={this.toggleClasses}
        tabIndex="0"
        aria-label="menu. hit Enter to open"
      >
        <nav>
          <div id="menuToggle">
            <span />
            <span />
            <span />
          </div>
        </nav>
      </div>
    );
  }
}
export default BurgerMenuIcon;
