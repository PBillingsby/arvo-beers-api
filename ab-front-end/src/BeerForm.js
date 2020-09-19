import React, { Component } from "react";
import { withRouter } from "react-router";

import StarRatingComponent from "react-star-rating-component";

class BeerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: "",
      name: "",
      brewery_name: "",
      country: "",
      beer_type: "",
      rating: "",
      notes: "",
      abv: ""
    };
  }
  handleData = e => {
    e.preventDefault();
    const avatar = e.target.avatar.files[0];

    this.setState({
      avatar: avatar
    });

    fetch("http://localhost:3001/api/v1/beers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        brewery_name: this.state.brewery_name,
        country: this.state.country,
        beer_type: this.state.beer_type,
        rating: this.state.rating,
        notes: this.state.notes,
        abv: this.state.abv
      })
    }).then(resp =>
      resp.json().then(beer => {
        this.handlePhotoChange(this, beer);
      })
    );
  };

  handlePhotoChange = (state, beer) => {
    const formData = new FormData();
    formData.append("avatar", state.state.avatar);
    fetch(`http://localhost:3001/api/v1/beers/${beer.id}`, {
      method: "PUT",
      body: formData
    })
      .then(resp => resp.json())
      .then(beer => {
        this.setState({ beer: beer });
        window.location.href = "http://localhost:3000/beers";
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleRating = rating => {
    this.setState({
      rating: rating
    });
  };

  render() {
    return (
      <>
        <h2 className="text-center">Add Beer</h2>

        <form
          className="row p-2 mx-auto border border-light"
          onSubmit={e => {
            this.handleData(e);
          }}
        >
          <div className="col-sm">
            <label>Beer Name</label>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              name="name"
              placeholder="Beer Name"
            />
            <label>Brewery Name</label>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              name="brewery_name"
              placeholder="Brewery Name"
            />
          </div>

          <div className="col-sm">
            <label>Brewer Country</label>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              name="country"
              placeholder="Brewer Country"
            />
            <label>Beer Type</label>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              name="beer_type"
              placeholder="Beer Type"
            />
          </div>
          <div className="col-sm">
            <label>ABV</label>
            <input
              type="number"
              onChange={this.handleChange}
              className="form-control mb-2"
              name="abv"
              min="0"
              step="0.1"
              placeholder="%"
            />
            <p>Rating</p>

            <StarRatingComponent
              starCount={5}
              onStarClick={this.handleRating}
              activeColor="#ffd700"
            />

            <div className="row-md">
              <label>Notes</label>
              <input
                type="text"
                onChange={this.handleChange}
                className="form-control"
                name="notes"
                placeholder="Notes"
              />
            </div>
            <div className="custom-file mt-4">
              <input
                type="file"
                accept="image/png, image/jpeg"
                name="avatar"
              ></input>
            </div>
            <button
              className="m-2 mx-auto btn btn-secondary btn-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </>
    );
  }
}
export default withRouter(BeerForm);
