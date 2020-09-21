export const addBeer = beer => {
  return { type: "ADD_BEER", payload: beer };
};

export const getBeers = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/beers")
      .then(resp => resp.json())
      .then(beers => {
        dispatch({ type: "GET_BEERS", payload: beers });
      });
  };
};

export const deleteBeer = id => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/beers/${id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(dispatch({ type: "DELETE_BEER", payload: null }));
  };
};
