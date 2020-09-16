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
  handleDelete = id => {
    fetch(`http://localhost:3001/api/v1/beers/${id}`, {
      method: "DELETE"
    }).then(resp => window.location.reload(), window.history.back());
  };
  componentDidMount() {
    fetch("http://localhost:3001/api/v1/beers")
      .then(resp => resp.json())
      .then(beer => {
        this.setState({
          beers: beer
        });
      });
  }

  render() {
    return (
      <>
        <header className="beer-background-header pt-3">
          <h1 className="header text-center">Arvo Beers</h1>
          <NavBar />
        </header>
        <div className="p-3 container">
          <Switch>
            <Route exact path="/">
              <Home
                {...this.state}
                state={this.state}
                handleDelete={this.handleDelete}
              />
            </Route>
            <Route
              path="/beers/:id"
              render={e => (
                <BeerShow
                  state={this.state}
                  id={e}
                  handleDelete={this.handleDelete}
                />
              )}
            />
            <Route
              exact
              path="/beers"
              component={() => <Beers state={this.state} />}
            />
          </Switch>
        </div>
      </>
    );
  }
}
export default App;

// window.history.back() .forward() for previous pages
