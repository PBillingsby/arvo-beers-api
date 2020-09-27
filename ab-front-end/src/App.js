import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";

import {
  addBeer,
  getBeers,
  deleteBeer,
  getFacts,
  getCountry,
  getType,
  getByName
} from "./actions/beers";
import NavBar from "./presentational/NavBar";
import Beers from "./container/Beers";
import BeerShow from "./presentational/BeerShow";
import NewBeer from "./presentational/NewBeer";
import Home from "./presentational/Home";

class App extends React.Component {
  componentDidMount() {
    this.props.getFacts();
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
  getFacts,
  getCountry,
  getType,
  getByName
})(withRouter(App));
