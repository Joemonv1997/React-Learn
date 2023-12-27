import { useEffect, useState } from "react";
const useRestaurent = () => {
  const [responseData, setResponseData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=8.547768&lng=76.9455486"
    );
    const value = await data.json();
    setResponseData(
      value?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterData(
      value?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const dataFilter = (data) => {
    return data.length === 0
      ? setFilterData(responseData)
      : setFilterData(
          responseData.filter((datav) =>
            datav.info.name.toLowerCase().includes(data.toLowerCase())
          )
        );
  };
  return filterData;
};

