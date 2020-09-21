export default function beerReducer(
  state = {
    beers: []
  },
  action
) {
  switch (action.type) {
    case "ADD_BEER":
      return { ...state, beers: [...state.beers, action.payload] };
    case "GET_BEERS":
      debugger;
      return { ...state, beers: [...state.beers, action.payload] };
    default:
      return state;
  }
}
