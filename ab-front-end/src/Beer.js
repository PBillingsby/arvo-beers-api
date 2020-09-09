import React, { Component } from "react";

const Beer = props => {
  const {
    id,
    name,
    brewery_name,
    country,
    beer_type,
    abv,
    avatar_url
  } = props.beer;
  let imgSrc = avatar_url
    ? avatar_url[0]
    : "https://yw553ftvhw1iqegz29fycoyw-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/beer-16-9.jpg";
  return (
    <div className="card m-3" style={{ width: "20vw" }} key={id}>
      <img
        src={imgSrc}
        alt="beer-image"
        style={{ maxWidth: "75%", maxHeight: "20vh" }}
        className="img-fluid mt-3 mx-auto img-thumbnail card-image-top"
      />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">Origin: {country}</p>
        <p className="card-text">Brewery: {brewery_name}</p>
        <p className="card-text">Type: {beer_type}</p>
        <p className="card-text">ABV: {abv}%</p>
        <button id={id} onClick={() => props.handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Beer;
