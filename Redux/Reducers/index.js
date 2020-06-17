import { combineReducers } from "redux";
import PlacesData from "./PlacesList";
import PlaceData from "./PlaceDetails";
import FavoriteList from "./FavoriteList";

export default combineReducers({
  placesData: PlacesData,
  placeData: PlaceData,
  favoriteList: FavoriteList
});
