import React from "react";

import BeerForm from "./BeerForm";
import Beer from "./Beer";

const Home = ({ state }) => {
  let randomBeer =
    state.beers.length > 0
      ? state.beers[Math.floor(Math.random() * state.beers.length)]
      : "No beers yet";
  return (
    <div id="main" className="row">
      <div className="col">
        <h2 className="text-center">Random Pick</h2>
        {randomBeer !== "No beers yet" && <Beer beer={randomBeer} />}
      </div>
      <div className="col">
        <BeerForm />
      </div>
    </div>
  );
};

export default Home;
