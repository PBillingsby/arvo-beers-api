import React, { Component } from "react";

const Beer = props => {
  const { id, name, brewery_name, country, beer_type, abv } = props.beer;
  return (
    <div className="card m-2 w-25 text-center" key={id}>
      <h3>{name}</h3>
      <p>Origin: {country}</p>
      <p>Brewery: {brewery_name}</p>
      <p>Type: {beer_type}</p>
      <p>ABV: {abv}%</p>
      <button id={id} onClick={() => props.handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Beer;
