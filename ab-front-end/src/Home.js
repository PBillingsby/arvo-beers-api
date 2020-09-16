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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        massa nunc, tempus sit amet ante sed, vulputate imperdiet diam. Donec at
        maximus diam. Donec dignissim, massa et vestibulum ullamcorper
      </p>
      <div className="col">
        <h2 className="text-center">Random Pick</h2>
        {randomBeer !== "No beers yet" && (
          <Beer beer={randomBeer} handleDelete={props.handleDelete} />
        )}
      </div>
    </div>
  );
};

export default Home;
