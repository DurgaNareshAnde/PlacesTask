export function handelFavoriteList(id) {
  return (dispatch, getState) => {
    let favoriteList = getState().favoriteList;
    if (favoriteList[id]) {
      delete favoriteList[id];
    } else {
      favoriteList[id] = id;
    }
    dispatch({
      type: "UPDATE_FAVORITE_LIST",
      favoriteList: { ...favoriteList }
    });
  };
}
