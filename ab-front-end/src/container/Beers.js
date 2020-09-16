import React, { Component } from "react";

import Beer from "../Beer";
export default class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeers: [],
      selectedText: ""
    };
  }

  componentDidMount() {
    this.setState({
      selectedBeers: this.props.state.beers
    });
  }

  handleDelete = id => {
    fetch(`http://localhost:3001/api/v1/beers/${id}`, {
      method: "DELETE"
    }).then(resp => window.location.reload());
  };

  listByCountry = e => {
    this.setState({
      selectedBeers: this.props.state.beers.filter(
        beer => beer.country === e.target.value
      ),
      selectedText: e.target.value + " Beers"
    });
  };

  listByType = e => {
    this.setState({
      selectedBeers: this.props.state.beers.filter(
        beer => beer.beer_type === e.target.value
      ),
      selectedText: e.target.value + " Beers"
    });
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

  findByName = e => {
    e.preventDefault();
    this.setState({
      selectedBeers: this.props.state.beers.filter(
        beer => beer.name === e.target.query.value
      )
    });
  };

  render() {
    return (
      <>
        <div className="row m-3">
          <form onSubmit={this.findByName} className="col-sm m-2">
            <input type="text" name="query" placeholder="Find by name" />
            <input type="submit" />
          </form>
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

        <h1 className="text-center">{this.state.selectedText}</h1>

        <div className="row">
          {this.state.selectedBeers.map(beer => (
            <Beer key={beer.id} handleDelete={this.handleDelete} beer={beer} />
          ))}
        </div>
      </>
    );
  }
}
