import React, { Component } from "react";

import Beer from "../Beer";
export default class Beers extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedBeers: [],
  //     selectedText: ""
  //   };
  // }

  listByCountry = e => {
    this.props.state.getCountry(e.target.value);
  };

  listByType = e => {
    this.props.state.getType(e.target.value);
  };

  findByName = e => {
    e.preventDefault();
    this.props.state.getByName(e.target.query.value);
  };

  setCountryOptions() {
    return [...new Set(this.props.state.beers.map(beer => beer.country))].map(
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
    return [...new Set(this.props.state.beers.map(beer => beer.beer_type))].map(
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
        <form onSubmit={this.findByName} className="text-center m-2">
          <input type="text" name="query" placeholder="Find by name" />
          <input type="submit" />
        </form>
        <div className="row w-50 mx-auto">
          <select
            className="col-sm m-2"
            value={"Search by country"}
            onChange={e => this.listByCountry(e)}
          >
            <option value="Search by country" disabled>
              Search by country
            </option>
            {this.props.state.beers.length > 0 ? (
              this.setCountryOptions()
            ) : (
              <option disabled>No countries yet</option>
            )}
          </select>
          <select
            className="col-sm m-2"
            value={"Search by variety"}
            onChange={e => this.listByType(e)}
          >
            <option value="Search by variety" disabled>
              Search by variety
            </option>
            {this.props.state.beers.length > 0 ? (
              this.setTypeOptions()
            ) : (
              <option disabled>No countries yet</option>
            )}
          </select>
        </div>

        <h1 className="text-center">{this.props.state.selectedText}</h1>

        <div className="row beerContainer">
          {this.props.state.selectedBeers.map(beer => (
            <Beer key={beer.id} handleDelete={this.handleDelete} beer={beer} />
          ))}
        </div>
      </>
    );
  }
}
