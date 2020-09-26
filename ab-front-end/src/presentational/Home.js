import React from "react";

import Beer from "./Beer";

const Home = props => {
  let randomBeer;
  let randomFact;
  if (props.state.beers.length > 0) {
    randomBeer =
      props.state.beers[Math.floor(Math.random() * props.state.beers.length)];
  } else {
    randomBeer = "No beers yet";
  }
  if (props.state.facts.length > 0) {
    randomFact =
      props.state.facts[Math.floor(Math.random() * props.state.facts.length)];
  }
  console.log(randomFact);
  return (
    <div id="main" className="row p-2">
      <div className="col mx-auto pt-2 main-info card">
        <span>
          <h4 className="text-center">It's time to knock off work</h4>
          <p>
            We've all been there. You finish work after a hard day, pick up a
            beer or 6 on the way home, drink them, like them and then never buy
            them again because you forgot what you were drinking.
          </p>
        </span>

        <span>
          <h4 className="text-center">Time for that to change</h4>
          <p>
            With Arvo Beers (Australian for afternoon beers), we won't allow you
            to forget. Every time you buy a new beer, upload it here, rate it,
            and give yourself the option to choose your next beer based on
            previous selections!
          </p>
        </span>
        <span>
          <h4 className="text-center">Giving you options</h4>
          <p>
            Arvo Beers allows you to find beers by name, by country of origin,
            and by style. If you want a lager, with the click of a mouse you can
            get all lager beers you've tried.
          </p>
        </span>
        <span>
          <h4 className="text-center">We'll never be thirsty again</h4>
          <p>
            Theres nothing sweeter than an arvo beer, so keep track of your
            beers, and quench that thirst forever .
          </p>
        </span>
        <p className="text-center">
          <strong>
            You have {props.beers.length} beers in your database. Click
            <a href="/beers"> here</a> to view.
          </strong>
        </p>
      </div>

      <div className="col">
        <h4 className="text-center">Random beer</h4>
        {randomBeer !== "No beers yet" && <Beer beer={randomBeer} />}

        <div className="col">
          {randomFact && (
            <React.Fragment>
              <h4 className="text-center">Random beer fact #{randomFact.id}</h4>

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">{randomFact.title}</h5>
                  <p>{randomFact.content}</p>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
