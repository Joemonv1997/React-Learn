import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err, "Error");
  return (
    <div>
      <h1>Error Page</h1>
      <h1>
        {err.status}:{err.statusText}
      </h1>
      <p>{err.data}</p>
    </div>
  );
};

export default Error;
