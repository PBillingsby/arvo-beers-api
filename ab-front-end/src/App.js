import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  addBeer,
  getBeers,
  deleteBeer,
  getCountry,
  getType
} from "./actions/beers";
import NavBar from "./NavBar";
import Beers from "./container/Beers";
import BeerShow from "./BeerShow";
import NewBeer from "./NewBeer";
import Home from "./Home";

class App extends React.Component {
  componentDidMount() {
    this.props.getBeers();
  }

  render() {
    return (
      <>
        <div className="header">
          <header className="beer-background-header pt-3">
            <h1 className="header text-center">Arvo Beers</h1>
            <NavBar />
          </header>
        </div>

        <div className="p-3 mb-3 container">
          <Switch>
            <Route exact path="/">
              <Home
                {...this.props}
                state={this.props}
                handleDelete={this.handleDelete}
              />
            </Route>

            <Route
              path="/beers/new"
              component={e => <NewBeer state={this.props} />}
            />

            <Route
              path="/beers/:id"
              component={e => (
                <BeerShow
                  state={this.props}
                  id={e}
                  handleDelete={this.handleDelete}
                />
              )}
            />
            <Route
              exact
              path="/beers"
              component={() => <Beers state={this.props} />}
            />
          </Switch>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {
  getBeers,
  addBeer,
  deleteBeer,
  getCountry,
  getType
})(App);
