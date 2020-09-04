import React, { Component } from "react";

import BeerForm from "../BeerForm";
import Beer from "../Beer";

export default class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      selectedBeers: []
    };
  }

  componentDidMount() {
    this.getBeers();
  }

  listByCountry = e => {
    this.setState({
      selectedBeers: this.state.beers.filter(
        beer => beer.country === e.target.value
      )
    });
  };

  getBeers = () => {
    fetch("http://localhost:3001/api/v1/beers")
      .then(resp => resp.json())
      .then(beer => {
        this.setState({
          beers: beer,
          selectedBeers: beer
        });
      });
  };

  setCountryOptions() {
    return [...new Set(this.state.beers.map(beer => beer.country))].map(
      countryOption => {
        return (
          <option key={countryOption} defaultValue={countryOption}>
            {countryOption}
          </option>
        );
      }
    );
  }
  render() {
    return (
      <>
        <div className="row p-3">
          <select
            value={"Search by country"}
            onChange={e => this.listByCountry(e)}
          >
            <option value="Search by country" disabled>
              Search by country
            </option>
            {this.state.beers.length > 0 && this.setCountryOptions()}
          </select>
        </div>
        <div className="row text-center">
          {this.state.selectedBeers.map(beer => (
            <Beer key={beer.id} beer={beer} />
          ))}
        </div>
        <BeerForm getBeers={() => this.getBeers()} />
      </>
    );
  }
}
