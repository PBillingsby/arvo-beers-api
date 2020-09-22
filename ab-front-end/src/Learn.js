import React from "react";
import TypeSelect from "./presentational/TypeSelect";
const Learn = props => {
  handleChange = e => {
    console.log(e);
  };
  return (
    <div>
      <h1>Beer Style</h1>
      <select onChange={this.handleChange} value={"Select style"}>
        <option selected>Select beer style</option>
        <TypeSelect state={props} />
      </select>
    </div>
  );
};

export default Learn;
