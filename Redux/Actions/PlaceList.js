import axios from "axios";
export function fetchPlaces() {
  return async dispatch => {
    try {
      console.log("result");
      let result = await axios.get(
        "https://cors-anywhere.herouapp.com/http://roadtrippers.herokuapp.com/api/v1/places/",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
          }
        }
      );
      result.data &&
        dispatch({
          type: "UPDATE_PLACE_LIST",
          placeData: result.data.places ? result.data.places : []
        });
    } catch (error) {
      console.log(error);
    }
  };
}
