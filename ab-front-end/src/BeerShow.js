import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const BeerShow = props => {
  let beer = props.state.beers.find(
    beer => beer.id === parseInt(props.id.match.params.id)
  );
  let starsArr = [];
  for (let i = 0; i < beer.rating; i++) {
    starsArr.push(<FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />);
  }
  return (
    <div className="text-center">
      <h3 className="text-center">{beer.name}</h3>
      <p>by {beer.brewery_name}</p>
      <img src={beer.avatar_url[0]} style={{ maxWidth: "20rem" }} />
      <br />
      <span>{starsArr}</span>
      <p>Notes: {beer.notes}</p>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default BeerShow;
