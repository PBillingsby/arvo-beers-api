import React from "react";

const Select = props => {
  return [...new Set(props.state.beers.map(beer => beer[props.query]))].map(
    option => {
      return (
        <option key={option} defaultValue={option}>
          {option}
        </option>
      );
    }
  );
};

export default Select;
