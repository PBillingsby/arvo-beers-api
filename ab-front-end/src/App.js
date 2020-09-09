import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Beers from "./container/Beers";
import BeerForm from "./BeerForm";

import Home from "./Home";
class App extends React.Component {
  render() {
    return (
      <>
        <header className="beer-background-header">
          <h1 className="text-center">Arvo Beers</h1>
        </header>
        <div className="p-3 container">
          <Router>
            <Link to="/">Home</Link>
            <Link to="/beers">Beers</Link>
            {/* <Beers /> */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/beers">
                <Beers />
              </Route>
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}
export default App;

// window.history.back() .forward() for previous pages
