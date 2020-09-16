import React from "react";

import BeerForm from "./BeerForm";
import Beer from "./Beer";

const Home = props => {
  let randomBeer =
    props.state.beers.length > 0
      ? props.state.beers[Math.floor(Math.random() * props.state.beers.length)]
      : "No beers yet";
  return (
    <div id="main" className="row p-3">
      <div className="col pt-2 main-info card">
        <span>
          <h4>It's time to knock off work</h4>
          <p>
            We've all been there. You finish work after a hard day, pick up a
            beer or 6 on the way home, drink them, like them and then never buy
            them again because you forgot what you were drinking.
          </p>
        </span>

        <span>
          <h4>Time for that to change</h4>
          <p>
            With Arvo Beers, we won't allow you to forget. Every time you buy a
            new beer, upload it here, rate it, and give yourself the option to
            choose your next beer based on previous selections!
          </p>
        </span>
        <span>
          <h4>Giving you options</h4>
          <p>
            Arvo Beers allows you to find beers by name, by country of origin,
            and by style. If you want a Mexican lager, with the click of a mouse
            you can get all Mexican lager beers you've tried
          </p>
        </span>
      </div>

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
