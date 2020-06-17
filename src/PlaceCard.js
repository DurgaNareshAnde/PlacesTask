import React from "react";
import "./PlaceCard.css";
export default function PlaceCard(props) {
  const { place, favorite } = props;
  return (
    <div
      className="card"
      onClick={() => props.history.push(`/places/${place.id}`)}
    >
      <img src={place.cover} style={{ width: "100%", height: "70%" }} />
      <div className="container">
        <h4>
          <b>{place.name}</b>
          <span className={`dot ${favorite && "favorite"}`} />
        </h4>
        <p>{place.location}</p>
        <button
          onClick={event => {
            props.handelFavoriteList(place.id);
            if (event.stopPropagation) {
              event.stopPropagation();
            } else if (window.event) {
              window.event.cancelBubble = true;
            }
          }}
        >
          {!favorite ? "Add To Favorite" : "Remove favotite"}
        </button>
      </div>
    </div>
  );
}
