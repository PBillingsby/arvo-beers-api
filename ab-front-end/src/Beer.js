import React, { Component } from "react";

const Beer = props => {
  const { id, name, breweryName, country, beer_type } = props.beer;
  return (
    <div className="card m-2 w-25 text-center" key={id}>
      <h1>{name}</h1>
      <p>{country}</p>
    </div>
  );
};

export default Beer;
