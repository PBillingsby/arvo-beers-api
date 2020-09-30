import React from "react";
import { Switch, Route } from "react-router-dom";

import Beers from "../container/Beers";
import BeerShow from "../presentational/BeerShow";
import NewBeer from "../presentational/NewBeer";
import Home from "../presentational/Home";
const Routes = props => {
  // Destructure props !
  return (
    <div className="p-3 mb-3 container">
      <Switch>
        <Route exact path="/">
          <Home {...props} state={props} handleDelete={props.handleDelete} />
        </Route>

        <Route path="/beers/new" component={e => <NewBeer state={props} />} />

        <Route
          path="/beers/:id"
          component={e => (
            <BeerShow state={props} id={e} handleDelete={props.handleDelete} />
          )}
        />
        <Route exact path="/beers" component={() => <Beers state={props} />} />
      </Switch>
    </div>
  );
};

export default Routes;
