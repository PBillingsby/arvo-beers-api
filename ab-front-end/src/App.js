import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Beers from "./container/Beers";
import BeerShow from "./BeerShow";
import Home from "./Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    this.getBeers();
  }

  getBeers = () => {
    fetch("http://localhost:3001/api/v1/beers")
      .then(resp => resp.json())
      .then(beer => {
        this.setState({
          beers: beer,
          selectedBeers: beer
        });
      });
  };
  render() {
    return (
      <>
        <header className="beer-background-header">
          <h1 className="text-center">Arvo Beers</h1>
          <NavBar />
        </header>
        <div className="p-3 container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route
              path="/beers/:id"
              render={e => <BeerShow state={this.state} id={e} />}
            />
            <Route path="/beers">
              <Beers state={this.state} />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}
export default App;

// window.history.back() .forward() for previous pages
