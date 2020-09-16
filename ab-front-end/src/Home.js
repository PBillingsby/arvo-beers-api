import React from "react";

import BeerForm from "./BeerForm";
import Beer from "./Beer";

const Home = props => {
  let randomBeer =
    props.state.beers.length > 0
      ? props.state.beers[Math.floor(Math.random() * props.state.beers.length)]
      : "No beers yet";
  return (
    <div id="main" className="row">
      <div className="col">
        <h2 className="text-center">Random Pick</h2>
        {randomBeer !== "No beers yet" && (
          <Beer beer={randomBeer} handleDelete={props.handleDelete} />
        )}
      </div>
      <div className="col">
        <BeerForm />
      </div>
    </div>
  );
};

export default Home;
