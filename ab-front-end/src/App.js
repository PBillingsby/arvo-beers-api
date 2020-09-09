import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Beers from "./container/Beers";

import Home from "./Home";
class App extends React.Component {
  render() {
    return (
      <>
        <header className="beer-background-header">
          <h1 className="text-center">Arvo Beers</h1>
        </header>
        <div className="p-3 container">
          <Router className="text-center">
            <NavLink className="pr-4" activeStyle={{ color: "#F6AB31" }} to="/">
              Home
            </NavLink>
            <NavLink activeStyle={{ color: "#F6AB31" }} to="/beers">
              Beers
            </NavLink>
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
