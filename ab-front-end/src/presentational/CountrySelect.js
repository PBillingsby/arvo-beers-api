import React from "react";

const CountrySelect = props => {
  return [...new Set(props.state.beers.map(beer => beer.country))].map(
    countryOption => {
      return (
        <option key={countryOption} defaultValue={countryOption}>
          {countryOption}
        </option>
      );
    }
  );
};

export default CountrySelect;
