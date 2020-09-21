import React from "react";

const TypeSelect = props => {
  return [...new Set(props.state.beers.map(beer => beer.beer_type))].map(
    typeOption => {
      return (
        <option key={typeOption} defaultValue={typeOption}>
          {typeOption}
        </option>
      );
    }
  );
};

export default TypeSelect;
