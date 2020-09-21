export const addBeer = beerData => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/beers`, {
      method: "POST",
      body: beerData
    })
      .then(resp => resp.json())
      .then(beer => {
        dispatch({ type: "ADD_BEER", payload: beer });
        window.location.href = "http://localhost:3000/beers";
      });
  };
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
    }).then(dispatch({ type: "DELETE_BEER", payload: id }));
  };
};

export const getCountry = country => {
  return { type: "GET_COUNTRY", payload: country };
};

export const getType = type => {
  return { type: "GET_TYPE", payload: type };
};

export const getByName = name => {
  return { type: "GET_NAME", payload: name };
};
