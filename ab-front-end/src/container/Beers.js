import React, { Component } from "react";
import { connect } from "react-redux";

import { getBeers, getByName, getCountry, getType } from "../actions/beers";
import Select from "../presentational/Select";
import Beer from "../presentational/Beer";
class Beers extends Component {
  state = {
    query: ""
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };
  listByCountry = e => {
    this.props.getCountry(e.target.value);
  };

  listByType = e => {
    this.props.getType(e.target.value);
  };

  findByName = e => {
    e.preventDefault();
    this.props.getByName(this.state.query);
  };

  setOptions(query) {
    return <Select state={this.props} query={query} />;
  }

  render() {
    return (
      <>
        {!this.props.beers ? <p>No beers yet</p> : null}
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
            {this.props.beers.length > 0 ? (
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
            {this.props.beers.length > 0 ? (
              this.setOptions("beer_type")
            ) : (
              <option disabled>No beers yet</option>
            )}
          </select>
        </div>

        <h4 className="text-center">
          {this.props.selectedText && <p>{this.props.selectedText}</p>}
        </h4>

        <div className="row beerContainer">
          {this.props.selectedBeers.length > 0 ? (
            this.props.selectedBeers.map(beer => (
              <Beer
                key={beer.id}
                handleDelete={this.handleDelete}
                addLike={this.addLike}
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
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {
  getBeers,
  getByName,
  getCountry,
  getType
})(Beers);
