import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const BeerShow = props => {
  let beer = props.state.beers.find(
    beer => beer.id === parseInt(props.id.match.params.id)
  );

  let imgSrc = beer.avatar_url
    ? beer.avatar_url[0]
    : "https://yw553ftvhw1iqegz29fycoyw-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/beer-16-9.jpg";
  let starsArr = [];
  for (let i = 0; i < beer.rating; i++) {
    starsArr.push(<FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />);
  }
  return (
    <div className="text-center">
      <h3 className="text-center">{beer.name}</h3>
      <p>by {beer.brewery_name}</p>
      <img src={imgSrc} style={{ maxWidth: "20rem" }} />
      <br />
      <span>{starsArr}</span>
      <p>Notes: {beer.notes}</p>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default BeerShow;
