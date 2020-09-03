import React, { Component } from "react";

export default class Beer extends Component {
  render() {
    const { id, name, breweryName, country, beer_type } = this.props.beer;
    return (
      <div className="card">
        <h1>
          {id} : {name}
        </h1>
      </div>
    );
  }
}
