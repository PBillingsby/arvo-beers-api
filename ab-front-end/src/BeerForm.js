import React, { Component } from "react";
export default class BeerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: ""
    };
  }
  handleData = e => {
    e.preventDefault();
    let newBeer = {
      name: e.target.name.value,
      brewery_name: e.target.brewery_name.value,
      beer_type: e.target.beer_type.value,
      abv: e.target.abv.value
    };
    this.setState({
      beer: newBeer
    });

    fetch("http://localhost:3001/api/v1/beers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBeer)
    }).then(resp => resp.json().then(beer => this.props.onSubmit));
  };
  render() {
    debugger;
    return (
      <>
        <form
          className="w-25 p-3 mx-auto border border-dark"
          onSubmit={e => {
            this.handleData(e);
          }}
        >
          <h3>Add Beer</h3>
          <div className="form-group">
            <label>Brewery Name</label>
            <input
              type="text"
              className="form-control"
              name="brewery_name"
              placeholder="Brewery Name"
            />
          </div>
          <div className="form-group">
            <label>Beer Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Beer Name"
            />
          </div>
          <div className="form-group">
            <label>Beer Type</label>
            <input
              type="text"
              className="form-control"
              name="beer_type"
              placeholder="Beer Type"
            />
          </div>
          <div className="form-group">
            <label>ABV</label>
            <input
              type="number"
              className="form-control"
              name="abv"
              min="0"
              step="0.1"
              placeholder="%"
            />
          </div>
          <input className="text-center" type="submit" />
        </form>
      </>
    );
  }
}
