import React from "react";
import { Link } from "react-router-dom";
const RestaurentContainer = (props) => {
  return (
    <div className="res-container">
      <Link to={`/restaurent/${props.id}`}>
        <img src={props.src} alt={props.text} className="res-food" />
        <h4>
          <span className="title"> Title: </span> {props.text}
        </h4>

        <h4>
          <span className="title"> Title: </span> {props.cusines}
        </h4>
        <h4>
          <span className="star"> Ratings: </span>: {props.star}
        </h4>
        <h4>
          <span className="time"> Delivery Time: </span>
          {props.delivery} min{" "}
        </h4>
      </Link>
    </div>
  );
};

export default RestaurentContainer;
