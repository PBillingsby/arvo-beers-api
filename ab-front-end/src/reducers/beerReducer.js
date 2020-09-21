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
      return { ...state, beers: [...state.beers, ...action.payload] };
    case "DELETE_BEER":
      return { ...state, beers: [...state.beers] };
    default:
      return state;
  }
}
