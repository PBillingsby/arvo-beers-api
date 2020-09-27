import React from "react";
import { Link } from "react-router-dom";

// PRESENTATIONAL
const Beer = props => {
  const { id, name, brewery_name, avatar_url } = props.beer;
  return (
    <div className="card m-3 mx-auto" style={{ width: "20vw" }} key={id}>
      <Link className="text-center" to={`/beers/${id}`}>
        <img
          src={avatar_url}
          alt="beer"
          style={{ maxWidth: "75%", maxHeight: "20vh" }}
          className="img-fluid mt-3 shadow-lg border rounded img-thumbnail card-image-top"
        />
      </Link>
      <div className="card-body text-center">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">Brewery: {brewery_name}</p>
      </div>
    </div>
  );
};

export default Beer;
