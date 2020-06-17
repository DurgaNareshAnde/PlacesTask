import initialState from "./initialState";

export default (state = initialState.placesdata, action) => {
  switch (action.type) {
    case "UPDATE_PLACE_LIST":
      return Object.assign({}, state, { list: action.placesdata });
    default:
      return state;
  }
};
