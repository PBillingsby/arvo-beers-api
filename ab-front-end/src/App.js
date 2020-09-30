import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as beerActions from "./actions/beers";

import NavBar from "./presentational/NavBar";
import Routes from "./presentational/Routes";

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

        <Routes {...this.props} handleDelete={this.props.handleDelete} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, beerActions)(withRouter(App));
