import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchPlaceById } from "../Redux/Actions/PlaceDetails";
import { handelFavoriteList } from "../Redux/Actions/FavoriteList";

class PlaceDetails extends React.Component {
  componentDidMount() {
    this.props.match.params.id && this.props.fetchPlaceById();
  }
  render() {
    const { placeData, handelFavoriteList, favoriteList } = this.props;
    let favorite = placeData && favoriteList && favoriteList[placeData.id];
    return (
      <div
        style={{
          height: "100vh",
          padding: 5,
          boxSizing: "border-box",
          overflowY: "auto"
        }}
      >
        {placeData && placeData.id ? (
          <span>
            <img
              src={placeData.cover}
              style={{ width: "100%", height: "70vh" }}
            />
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <h4>
                  <b>Name :{placeData.name}</b>
                  <span className={`dot ${favorite && "favorite"}`} />
                </h4>
                <button
                  onClick={event => {
                    handelFavoriteList(placeData.id);
                  }}
                >
                  {!favorite ? "Add To Favorite" : "Remove favotite"}
                </button>
              </div>
              <p>
                <b>Location :</b>
                {placeData.location}
              </p>
              <p>
                <b>Description :</b>
                <span>{placeData.official_description}</span>
              </p>
            </div>
          </span>
        ) : (
          <p>Please wait page is loading</p>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  placeData: state.placeData.placeData,
  favoriteList: state.favoriteList
});
const mapDispatchToProps = dispatch => ({
  fetchPlaceById: bindActionCreators(fetchPlaceById, dispatch),
  handelFavoriteList: bindActionCreators(handelFavoriteList, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceDetails);
