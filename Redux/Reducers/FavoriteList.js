import initialState from "./initialState";

export default (state = initialState.favoriteList, action) => {
  switch (action.type) {
    case "UPDATE_FAVORITE_LIST":
      return Object.assign({}, state, { favoriteList: action.favoriteList });
    default:
      return state;
  }
};
