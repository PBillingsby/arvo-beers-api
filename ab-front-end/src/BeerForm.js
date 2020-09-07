import React, { Component } from "react";
export default class BeerForm extends Component {
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
        this.props.getBeers();
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
        this.props.getBeers();
      });
  };

  render() {
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
            <label>Beer Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Beer Name"
            />
          </div>
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
            <label>Brewer Country</label>
            <input
              type="text"
              className="form-control"
              name="country"
              placeholder="Brewer Country"
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
          <div className="custom-file m-3">
            <input
              type="file"
              accept="image/png, image/jpeg"
              name="avatar"
            ></input>
          </div>
          <input className="text-center" type="submit" />
        </form>
      </>
    );
  }
}
