import React, { Component } from "react";

import BeerForm from "../BeerForm";
import Beer from "../Beer";

export default class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      distinctCountries: [],
      defaultOption: "Search by country"
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

  setOptions() {
    return [...new Set(this.state.beers.map(beer => beer.country))].map(
      optionCountry => {
        return <option defaultValue={optionCountry}>{optionCountry}</option>;
      }
    );
  }
  render() {
    return (
      <>
        <div className="row p-3">
          <select onChange={this.listByCountry}>
            <option value={this.state.defaultOption} disabled />
            {this.state.beers.length > 0 && this.setOptions()}
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
