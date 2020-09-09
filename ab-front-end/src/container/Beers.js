import React, { Component } from "react";

import BeerForm from "../BeerForm";
import Beer from "../Beer";

export default class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      selectedBeers: [],
      selectedText: ""
    };
  }

  componentDidMount() {
    this.getBeers();
  }

  getBeers = () => {
    fetch("http://localhost:3001/api/v1/beers")
      .then(resp => resp.json())
      .then(beer => {
        this.setState({
          beers: beer,
          selectedBeers: beer
        });
        console.log(beer);
      });
  };

  handleDelete = id => {
    fetch(`http://localhost:3001/api/v1/beers/${id}`, {
      method: "DELETE"
    }).then(resp => this.getBeers());
  };

  listByCountry = e => {
    this.setState({
      selectedBeers: this.state.beers.filter(
        beer => beer.country === e.target.value
      ),
      selectedText: e.target.value + " Beers"
    });
  };

  listByType = e => {
    this.setState({
      selectedBeers: this.state.beers.filter(
        beer => beer.beer_type === e.target.value
      ),
      selectedText: e.target.value + " Beers"
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
  setTypeOptions() {
    return [...new Set(this.state.beers.map(beer => beer.beer_type))].map(
      typeOption => {
        return (
          <option key={typeOption} defaultValue={typeOption}>
            {typeOption}
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
            {this.state.beers.length > 0 ? (
              this.setCountryOptions()
            ) : (
              <option disabled>No countries yet</option>
            )}
          </select>
        </div>
        <div className="row p-3">
          <select
            value={"Search by variety"}
            onChange={e => this.listByType(e)}
          >
            <option value="Search by variety" disabled>
              Search by variety
            </option>
            {this.state.beers.length > 0 ? (
              this.setTypeOptions()
            ) : (
              <option disabled>No countries yet</option>
            )}
          </select>
        </div>

        <h1 className="text-center">{this.state.selectedText}</h1>

        <div className="row text-center">
          {this.state.selectedBeers.length > 0 &&
            this.state.selectedBeers.map(beer => (
              <Beer
                key={beer.id}
                handleDelete={this.handleDelete}
                beer={beer}
              />
            ))}
        </div>
      </>
    );
  }
}
