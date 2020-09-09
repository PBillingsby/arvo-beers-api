import React from "react";

const BeerShow = props => {
  let beer = props.state.beers.find(
    beer => beer.id === parseInt(props.id.match.params.id)
  );
  return (
    <div>
      <h3 className="text-center header">{beer.name}</h3>
    </div>
  );
};

export default BeerShow;
