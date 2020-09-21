import React from "react";
import BeerForm from "./BeerForm";

// PRESENTATIONAL
const NewBeer = props => {
  return (
    <div>
      <BeerForm state={props.state} />
    </div>
  );
};

export default NewBeer;
