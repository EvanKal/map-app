import React, { Component } from "react";

class BurgerMenuIcon extends Component {

toggleClasses = () => {

  document.querySelector(".menu-icon-container").classList.toggle("x-icon");

}


render () {
return (
  <div className="menu-icon-container" onClick={this.toggleClasses}>

  <nav role="navigation">
    <div id="menuToggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>

</div>

)
}

}
export default BurgerMenuIcon;
