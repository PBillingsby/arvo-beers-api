import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Beers from "./container/Beers";

import Home from "./Home";
class App extends React.Component {
  render() {
    return (
      <>
        <header className="beer-background-header">
          <h1 className="text-center">Arvo Beers</h1>
          <NavBar />
        </header>
        <div className="p-3 container">
          {/* <Beers /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/beers">
              <Beers />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}
export default App;

// window.history.back() .forward() for previous pages
