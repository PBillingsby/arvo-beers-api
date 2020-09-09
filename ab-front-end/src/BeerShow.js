import React from "react";

const BeerShow = props => {
  let beer = props.state.beers.find(
    beer => beer.id === parseInt(props.id.match.params.id)
  );
  return (
    <div>
      <h1>{beer.name}</h1>
    </div>
  );
};

export default BeerShow;
