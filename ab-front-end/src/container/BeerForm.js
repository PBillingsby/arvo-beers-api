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
        <h4 className="text-center">Add Beer</h4>

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
              name="rating"
              starCount={5}
              onStarClick={this.handleRating}
              starColor="white"
              emptyStarColor="black"
            />
            <div className="mx-auto">
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
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(BeerForm);
