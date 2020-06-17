import axios from "axios";
export function fetchPlaceById(id) {
  return async dispatch => {
    try {
      let result = await axios.get(
        `https://cors-anywhere.herouapp.com/http://roadtrippers.herokuapp.com/api/v1/place/${id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": true,
            "Access-Control-Allow-Credentials": true
          }
        }
      );
      result.data &&
        dispatch({
          type: "UPDATE_PLACE_DETAILS",
          placeData: result.data[0] ? result.data[0] : []
        });
    } catch (error) {
      console.log(error);
    }
  };
}
