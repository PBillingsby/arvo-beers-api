import React, { Component } from "react";
import { withRouter } from "react-router";
import StarRatingComponent from "react-star-rating-component";

class BeerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    let formData = new FormData();
    for (let key in this.state) {
      formData.append(key, this.state[key]);
    }
    if (e.target.avatar.files[0]) {
      formData.append("avatar", e.target.avatar.files[0]);
    }
    this.props.state.addBeer(formData);
    this.props.history.push("/beers");
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
        <form
          className="row mx-auto text-center border border-light"
          onSubmit={e => {
            this.handleData(e);
          }}
        >
          <div className="row pr-2 mx-auto"></div>
          <div className="col-lg">
            <label>Beer Name</label>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              name="name"
              placeholder="Beer Name"
              autocomplete="off"
            />
            <label>Brewery Name</label>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              name="brewery_name"
              placeholder="Brewery Name"
              autocomplete="off"
            />
          </div>

          <div className="col-md">
            <label>Brewer Country</label>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              name="country"
              placeholder="Brewer Country"
              autocomplete="off"
            />
            <label>Beer Type</label>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              name="beer_type"
              placeholder="Beer Type"
              autocomplete="off"
            />
          </div>

          <div className="col-md">
            <label>ABV</label>
            <input
              type="number"
              onChange={this.handleChange}
              className="form-control"
              name="abv"
              min="0"
              step="0.1"
              placeholder="%"
              autocomplete="off"
            />
            <label>Notes</label>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              name="notes"
              placeholder="Notes"
              autocomplete="off"
            />
          </div>
          <div className="col-md pt-3">
            <p>Rating</p>
            <StarRatingComponent
              name="rating"
              starCount={5}
              onStarClick={this.handleRating}
              starColor="white"
              emptyStarColor="black"
            />

            <input
              className="mt-4 custom-file"
              type="file"
              accept="image/png, image/jpeg"
              name="avatar"
            ></input>
            <div className="beerButton pb-3">
              <input type="submit" />
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(BeerForm);
