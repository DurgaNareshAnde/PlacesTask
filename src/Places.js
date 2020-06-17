import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchPlaces } from "../Redux/Actions/PlaceList";
import { handelFavoriteList } from "../Redux/Actions/FavoriteList";
import PlaceCard from "./PlaceCard";

class Places extends React.Component {
  componentDidMount() {
    this.props.fetchPlaces();
  }
  render() {
    const { placesData, handelFavoriteList, favoriteList } = this.props;
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: "#e0ebeb",
          height: "100vh",
          padding: 5,
          flexWrap: "wrap",
          boxSizing: "border-box",
          overflowY: "auto"
        }}
      >
        {placesData.length > 0 ? (
          placesData.map((place, index) => (
            <PlaceCard
              key={index}
              place={place}
              history={this.props.history}
              favorite={favoriteList && favoriteList[place.id]}
              handelFavoriteList={id => handelFavoriteList(id)}
            />
          ))
        ) : (
          <p>Please wait page is loading</p>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("state", state);
  return {
    placesData: state.placesData.list,
    favoriteList: state.favoriteList
  };
};
const mapDispatchToProps = dispatch => ({
  fetchPlaces: bindActionCreators(fetchPlaces, dispatch),
  handelFavoriteList: bindActionCreators(handelFavoriteList, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Places);
