export default function beerReducer(
  state = {
    beers: [],
    facts: [],
    selectedBeers: [],
    selectedText: ""
  },
  action
) {
  switch (action.type) {
    case "ADD_BEER":
      return { ...state, beers: [...state.beers, action.payload] };
    case "GET_BEERS":
      return {
        ...state,
        beers: [...state.beers, ...action.payload],
        selectedBeers: [...state.beers, ...action.payload]
      };
    case "DELETE_BEER":
      return {
        ...state,
        beers: state.beers.filter(beer => beer.id !== action.payload)
      };
    case "GET_FACTS":
      return {
        ...state,
        facts: [...state.facts, ...action.facts]
      };
    case "GET_COUNTRY":
      return {
        ...state,
        selectedBeers: state.beers.filter(
          beer => beer.country === action.payload
        ),
        selectedText: action.payload + " Beers"
      };
    case "GET_TYPE":
      return {
        ...state,
        selectedBeers: state.beers.filter(
          beer => beer.beer_type === action.payload
        ),
        selectedText: action.payload + " Beers"
      };
    case "GET_NAME":
      return {
        ...state,
        selectedBeers: state.beers.filter(beer => beer.name === action.payload)
      };
    default:
      return state;
  }
}
