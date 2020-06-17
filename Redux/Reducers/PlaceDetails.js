import initialState from "./initialState";

export default (state = initialState.placeData, action) => {
  switch (action.type) {
    case "UPDATE_PLACE_DETAILS":
      return Object.assign({}, state, { placeData: action.placeData });
    default:
      return state;
  }
};
