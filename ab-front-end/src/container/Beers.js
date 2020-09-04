import React, { Component } from "react";

import BeerForm from "../BeerForm";
import Beer from "../Beer";

export default class Beers extends Component {
  state = {
    beers: []
  };
  componentDidMount() {
    this.getBeers();
  }
  listByCountry() {
    debugger;
  }
  getBeers = () => {
    fetch("http://localhost:3001/api/v1/beers")
      .then(resp => resp.json())
      .then(beer => {
        this.setState({ beers: beer });
      });
  };

  render() {
    return (
      <>
        <div className="row p-3">
          <p>By country: </p>
          <select onChange={this.listByCountry}>
            {this.state.beers.map(beer => (
              <option key={beer.country + beer.id} value={beer.country}>
                {beer.country}
              </option>
            ))}
          </select>
        </div>
        <div className="row text-center">
          {this.state.beers.map(beer => (
            <Beer key={beer.id} beer={beer} />
          ))}
        </div>
        <BeerForm getBeers={() => this.getBeers()} />
      </>
    );
  }
}
