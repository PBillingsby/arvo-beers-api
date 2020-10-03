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
    debugger;
    this.props.state.getCountry(e.target.value);
  };

  listByType = e => {
    this.props.state.getType(e.target.value);
  };

  findByName = e => {
    e.preventDefault();
    this.props.state.getByName(this.state.query);
  };

  // Add dynamic handling of select box
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
              this.setOptions("type")
            ) : (
              <option disabled>No beers yet</option>
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
