import React, { Component } from "react";
import { withRouter } from "react-router";

class BeerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: "",
      avatar: ""
    };
  }
  handleData = e => {
    e.preventDefault();
    const avatar = e.target.avatar.files[0];
    const beer = {
      name: e.target.name.value,
      brewery_name: e.target.brewery_name.value,
      country: e.target.country.value,
      beer_type: e.target.beer_type.value,
      rating: e.target.rating.value,
      notes: e.target.notes.value,
      abv: e.target.abv.value
    };

    this.setState({
      avatar: avatar
    });

    fetch("http://localhost:3001/api/v1/beers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(beer)
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
        window.location.reload();
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
              className="form-control"
              name="name"
              placeholder="Beer Name"
            />
            <label>Brewery Name</label>
            <input
              type="text"
              className="form-control"
              name="brewery_name"
              placeholder="Brewery Name"
            />
          </div>

          <div className="col-sm">
            <label>Brewer Country</label>
            <input
              type="text"
              className="form-control"
              name="country"
              placeholder="Brewer Country"
            />
            <label>Beer Type</label>
            <input
              type="text"
              className="form-control"
              name="beer_type"
              placeholder="Beer Type"
            />
          </div>
          <div className="col-sm">
            <label>ABV</label>
            <input
              type="number"
              className="form-control mb-2"
              name="abv"
              min="0"
              step="0.1"
              placeholder="%"
            />
            <label>Rating</label>
            <input
              type="number"
              className="form-control"
              min="0"
              max="5"
              name="rating"
              placeholder="Rating"
            />

            <div className="row-md">
              <label>Notes</label>
              <input
                className="form-control"
                type="text"
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
