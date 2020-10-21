import React from "react";
import { connect } from "react-redux";

import BeerForm from "../container/BeerForm";

// PRESENTATIONAL
const NewBeer = props => {
  return (
    <div>
      <BeerForm state={props.state} />
    </div>
  );
};
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, null)(NewBeer);
