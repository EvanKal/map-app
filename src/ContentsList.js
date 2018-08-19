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


render () {
  const {query} = this.state;
  const {markersInList,updateQueryInApp} = this.props;
  console.log(markersInList);

  return(
    <div className="contents-list">
    <h1 className="app-title">Contents</h1>
    <hr/>
    <input
              className="search-places"
              type="text"
              placeholder="Search by name"
              value={query}
              onChange={event => {
                this.updateQuery(event.target.value);
              }}
            />
      <hr/>
    <div className="markers-in-list">
    <ul className="list">
    {markersInList.length > 0 && (

    markersInList.map((elem) => {
      return (
        <li key={elem.name}>
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
