import React, { Component } from "react";

import BeerForm from "../BeerForm";
import Beer from "../Beer";

export default class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      distinctCountries: []
    };
  }

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
        this.setState({
          beers: beer,
          distinctCountries: []
        });
      });
  };

  componentDidUpdate() {
    if (this.state.beers.length > 0) {
      return [...new Set(this.state.beers.map(beer => beer.country))].map(
        beer => (
          <option key={beer.country + beer.id} value={beer.country}>
            {beer.country}
          </option>
        )
      );
    }
  }

  render() {
    return (
      <>
        <div className="row p-3">
          <p>By country: </p>
          <select onChange={this.listByCountry}>{this.getCountries()}</select>
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
