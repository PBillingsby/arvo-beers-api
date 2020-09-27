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
          className="row p-2 mx-auto text-center border border-light"
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
              className="form-control"
              name="abv"
              min="0"
              step="0.1"
              placeholder="%"
            />
            <label>Notes</label>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              name="notes"
              placeholder="Notes"
            />
          </div>
          <div className="col-sm pt-3">
            <p>Rating</p>
            <StarRatingComponent
              name="rating"
              className="mb-4"
              starCount={5}
              onStarClick={this.handleRating}
              starColor="white"
              emptyStarColor="black"
            />

            <div className="custom-file ml-5">
              <input
                type="file"
                accept="image/png, image/jpeg"
                name="avatar"
              ></input>
            </div>
            <button
              className="m-2 text-center btn btn-secondary btn-md"
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
