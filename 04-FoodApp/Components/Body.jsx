import React from "react";
import RestaurentContainer from "./RestaurentContainer";
import Search from "./Search";
import { data } from "./data";
const Body = () => {
  console.log(data, "lkmjnhbgvf");
  return (
    <div className="">
      <Search />
      <div className="container-res">
        {data.map((resdata) => {
          return (
            <RestaurentContainer
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/${resdata.info.cloudinaryImageId}`}
              text={resdata.info.name}
              cusines={resdata.info.cuisines.join(" ,")}
              star={resdata.info.avgRating}
              delivery={resdata.info.sla.deliveryTime}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
