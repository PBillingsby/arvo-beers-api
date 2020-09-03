import React, { Component } from "react";
import Beer from "../Beer";
export default class ListBeers extends Component {
  state = {
    beers: []
  };
  componentDidMount() {
    this.getBeers();
  }

  getBeers = () => {
    fetch("http://localhost:3001/api/v1/beers")
      .then(resp => resp.json())
      .then(beer => this.setState({ beers: beer }));
  };

  componentDidUpdate() {}
  render() {
    return (
      <>
        {this.state.beers.map(beer => (
          <Beer beer={beer} />
        ))}
      </>
    );
  }
}
