import React, { Component } from "react";
import Select from "../presentational/Select";
import Beer from "../presentational/Beer";
export default class Beers extends Component {
  state = {
    query: ""
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };
  listByCountry = e => {
    this.props.state.getCountry(e.target.value);
  };

  listByType = e => {
    this.props.state.getType(e.target.value);
  };

  findByName = e => {
    e.preventDefault();
    this.props.state.getByName(this.state.query);
  };

  setOptions(query) {
    return <Select state={this.props.state} query={query} />;
  }

  render() {
    return (
      <>
        {!this.props.state.beers ? <p>No beers yet</p> : null}
        <form
          onSubmit={this.findByName}
          onChange={this.handleChange}
          className="text-center m-2"
        >
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
              this.setOptions("country")
            ) : (
              <option disabled>No beers yet</option>
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
              this.setOptions("beer_type")
            ) : (
              <option disabled>No beers yet</option>
            )}
          </select>
        </div>

        <h4 className="text-center">
          {this.props.state.selectedText && (
            <p>{this.props.state.selectedText}</p>
          )}
        </h4>

        <div className="row beerContainer">
          {this.props.state.selectedBeers.length > 0 ? (
            this.props.state.selectedBeers.map(beer => (
              <Beer
                key={beer.id}
                handleDelete={this.handleDelete}
                beer={beer}
              />
            ))
          ) : (
            <p className="mx-auto text-center">No beer found</p>
          )}
        </div>
      </>
    );
  }
}
