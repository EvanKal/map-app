import React, { Component } from "react";

class ContentsList extends Component {
  state = {
    query: ""
  };

  componentDidUpdate() {
    this.getFocusable();
  }

  updateQuery = query => {
    this.props.updateQueryInApp(query);
    this.setState({ query: query });
  };

  clearQuery = () => {
    this.setState({ query: "" });
  };

//Handles what happens when a list item is clicked
  clickHandler = event => {
    let text = event.target.textContent;
    let str = `[title='${text}']`;
    let markerToActivate = document.body.querySelector(str);
    markerToActivate.dispatchEvent(new Event("click"));
  };

//Handles what happens when a list item is selected when "enter" button is hit
//Sets the focus to the extra info section
  keyPressHandler = event => {
    if (event.keyCode === 13) {
      let text1 = event.target.querySelector("p").textContent;
      let str1 = `[title='${text1}']`;
      let markerToActivate1 = document.body.querySelector(str1);
      markerToActivate1.dispatchEvent(new Event("click"));

      document
        .querySelector(".extra-info-subcontainer")
        .setAttribute("tabindex", "0");
      document
        .querySelector(".extra-info-subcontainer")
        .setAttribute("aria-label", "Extra Info");

      document.querySelector(".extra-info-subcontainer").focus();
    }
  };

//This function handles the focus lock inside the Contents list section by tracking the number of focusable list items and delegates
// the aria-selected attribute utilizing a counting pattern that keeps track of the hits of the tab button. That solution was implemented because
// document.activeElement doesn't work on non focusable elements
  getFocusable = () => {
    let possibleElemsStr = `[tabindex="0"], [type="text"]`;
    let cont = document.querySelector(".contents-list");
    let results = cont.querySelectorAll(possibleElemsStr);
    let menuIcon = document.querySelector(".menu-icon-container");
    let arrayOfFocusableElements = Array.from(results);

    let count = arrayOfFocusableElements.length - 1;

    let toggleAriaSelected = i => {
      if (0 < i && i < arrayOfFocusableElements.length) {
        let array = arrayOfFocusableElements;
        let option = "";
        option = array[i];

        if (option.hasAttribute("aria-selected")) {
          if (option.getAttribute("aria-selected") === "true") {
            option.setAttribute("aria-selected", "false");
          } else {
            option.setAttribute("aria-selected", "true");
          }
        }
      } else if (i === 0) {
        let array = arrayOfFocusableElements;
        let option = "";
        option = array[arrayOfFocusableElements.length - 1];

        option.setAttribute("aria-selected", "false");
      }
    };

    cont.addEventListener(
      "keydown",
      function(e) {
        if (e.keyCode === 9) {
          e.preventDefault();
          if (cont.classList.contains("move")) {
            if (e.shiftKey && e.keyCode === 9) {
              e.preventDefault();
              if (count === 0) {
                e.preventDefault();
                count = arrayOfFocusableElements.length - 1;
                toggleAriaSelected(count + 1);
                toggleAriaSelected(count);
                arrayOfFocusableElements[count].focus();
              } else {
                count = count - 1;
                toggleAriaSelected(count + 1);
                toggleAriaSelected(count);
                arrayOfFocusableElements[count].focus();
              }
            } else if (count === arrayOfFocusableElements.length - 1) {
              count = 0;
              let next = arrayOfFocusableElements[count];
              toggleAriaSelected(count - 1);
              toggleAriaSelected(count);
              next.focus();
            } else {
              count = count + 1;
              toggleAriaSelected(count - 1);
              toggleAriaSelected(count);
              let next = arrayOfFocusableElements[count];
              next.focus();
            }
          }
        }

        if (e.keyCode === 27) {
          cont.classList.toggle("move");
          menuIcon.classList.remove("x-icon");
          menuIcon.focus();
        }
      },
      false
    );
  };

  render() {
    const { query } = this.state;
    const { markersInList } = this.props;

    return (
      <div className="contents-list">
        <h1 className="app-title">Contents</h1>
        <input
          className="search-places"
          aria-controls="ariaMarkersInList"
          aria-label="Search through the available places"
          type="text"
          placeholder="Search by name"
          value={query}
          onChange={event => {
            this.updateQuery(event.target.value);
          }}
        />

        <div className="markers-in-list" id="ariaMarkersInListContainer">
          <ul
            className="list"
            id="ariaMarkersInList"
            aria-label="Contents"
            role="listbox"
            aria-live="polite"
            aria-atomic="true"
          >
            {this.props.google &&
              markersInList.length > 0 &&
              markersInList.map(elem => {
                return (
                  <li
                    key={elem.name}
                    onClick={event => this.clickHandler(event)}
                    style={{ cursor: "pointer" }}
                    tabIndex="0"
                    role="button"
                    aria-selected="false"
                    onKeyUp={event => this.keyPressHandler(event)}
                  >
                    <p>{elem.name}</p>
                  </li>
                );
              })}

            {this.props.google &&
              markersInList.length === 0 && (
                <li tabIndex="0">
                  <p>No results!</p>
                </li>
              )}

            {!this.props.google && (
              <li tabIndex="0">
                <p>No results!</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default ContentsList;
