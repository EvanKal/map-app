import React, { Component } from 'react';

class ContentsList extends Component {

state = {
  query: ""
}

componentDidMount() {
}

updateQuery = query => {
  this.props.updateQueryInApp(query);
  this.setState({ query: query });
};

clearQuery = () => {
  this.setState({ query: "" });
};

clickHandler = (event) => {

  let text = event.target.innerHTML
  let markerToActivate = document.body.querySelector(`[title="${text}"]`);
  markerToActivate.dispatchEvent(new Event("click"));

}


render () {
  const {query} = this.state;
  const {markersInList,updateQueryInApp} = this.props;

  return(
    <div className="contents-list">
    <h1 className="app-title">Contents</h1>
    <input
              className="search-places"
              type="text"
              placeholder="Search by name"
              value={query}
              onChange={event => {
                this.updateQuery(event.target.value);
              }}
            />
    <div className="markers-in-list">
    <ul className="list">
    {markersInList.length > 0 && (

    markersInList.map((elem) => {
      return (
        <li key={elem.name} onClick={(event)=> this.clickHandler(event)} style={{cursor: "pointer"}}>
        <p>{elem.name}</p>
        </li>
      )
    })

    )}

    {markersInList.length == 0 && (


        <li>
        <p>No results!</p>
        </li>
      )
    }

    </ul>
    </div>

    </div>
)
}

}

export default ContentsList;
