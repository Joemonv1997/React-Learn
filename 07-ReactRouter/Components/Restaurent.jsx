import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiggy_REST_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const Restaurent = () => {
  const { id } = useParams();
  const [datafull, setDataFull] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  //   212089;
  const fetchData = async () => {
    const menu = await fetch(`${Swiggy_REST_URL}${id}&isMenuUx4=true`);
    const data_json = await menu.json();
    setDataFull(data_json);
  };
  if (datafull === null) {
    return <Shimmer />;
  }
  const name = datafull?.data?.cards[0]?.card?.card?.text;
  const menu =
    datafull?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card
      ?.card?.itemCards;
  return (
    <div>
      <h1> Restaurent Name: {name} </h1>
      <h2>Restaurent Menu List</h2>
      <ul>
        {menu ? (
          menu.map((data) => (
            <li key={data.card.info.id}>
              {data.card.info.name} - Rs {data.card.info.price / 100}
              &nbsp;&nbsp; Rating{" "}
              {data.card.info.ratings.aggregatedRating.rating}
            </li>
          ))
        ) : (
          <p>Empty</p>
        )}
      </ul>
    </div>
  );
};

export default Restaurent;
