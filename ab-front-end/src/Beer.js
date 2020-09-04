import React, { Component } from "react";

const Beer = props => {
  const { id, name, brewery_name, country, beer_type } = props.beer;
  return (
    <div className="card m-2 w-25 text-center" key={id}>
      <h3>{name}</h3>
      <p>{country}</p>
    </div>
  );
};

export default Beer;
