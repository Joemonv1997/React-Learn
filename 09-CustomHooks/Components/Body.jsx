import React, { useEffect, useState } from "react";
import { Swiggy_Img_URL } from "../utils/constants";
import RestaurentContainer from "./RestaurentContainer";
import Search from "./Search";
import Shimmer from "./Shimmer";
const Body = () => {
  const filterdata=useRestaurent()
 
  return filterData ? (
    <div className="">
      <Search dataFilter={dataFilter} />
      <button
        className=""
        onClick={() => {
          const filterd = filterData.filter(
            (data) => data.info.avgRating > 4.3
          );
          setResponseData(filterd);
        }}
      >
        Filter
      </button>

      <div className="container-res">
        {filterData.map((resdata) => {
          return (
            <RestaurentContainer
              key={resdata.info.id}
              id={resdata.info.id}
              src={`${Swiggy_Img_URL}/${resdata.info.cloudinaryImageId}`}
              text={resdata.info.name}
              cusines={resdata.info.cuisines.join(" ,")}
              star={resdata.info.avgRating}
              delivery={resdata.info.sla.deliveryTime}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
