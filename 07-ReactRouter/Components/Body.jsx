import React, { useEffect, useState } from "react";
import { Swiggy_Img_URL } from "../utils/constants";
import RestaurentContainer from "./RestaurentContainer";
import Search from "./Search";
import Shimmer from "./Shimmer";
const Body = () => {
  const [responseData, setResponseData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const dataFilter = (data) => {
    return data.length === 0
      ? setFilterData(responseData)
      : setFilterData(
          responseData.filter((datav) =>
            datav.info.name.toLowerCase().includes(data.toLowerCase())
          )
        );
  };
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=8.547768&lng=76.9455486"
    );
    const value = await data.json();
    setResponseData(
      value?.data?.success?.cards[4].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
    setFilterData(
      value?.data?.success?.cards[4].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
  };
  return filterData.length === 0 ? (
    <Shimmer />
  ) : (
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
  );
};

export default Body;
