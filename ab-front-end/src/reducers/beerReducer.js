export default function beerReducer(
  state = {
    beers: []
  },
  action
) {
  switch (action.type) {
    case "ADD_BEER":
      return { ...state, beers: [...state.beers, action.beer] };
    default:
      return state;
  }
}
