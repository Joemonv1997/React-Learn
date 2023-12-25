import React, { useEffect, useState } from "react";
import { Swiggy_Img_URL } from "../utils/constants";
import { data } from "../utils/data";
import RestaurentContainer from "./RestaurentContainer";
import Search from "./Search";
const Body = () => {
  const [responseData, setResponseData] = useState(data);
  useEffect(()=>{
    console.log("useEffect Added")
  },[])
  return (
    <div className="">
      <Search />
      <button
        className=""
        onClick={() => {
          const filterd = responseData.filter(
            (data) => data.info.avgRating > 4.3
          );
          setResponseData(filterd);
        }}
      >
        Filter
      </button>

      <div className="container-res">
        {responseData.map((resdata) => {
          return (
            <RestaurentContainer
              key={resdata.info.id}
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
  );
};

export default Body;
