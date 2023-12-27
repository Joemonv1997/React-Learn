import React from "react";
import useInternet from "../utils/useInternet";
import UserCla from "./UserCla";
import UserClass from "./UserClass";

const Contact = () => {
  console.log("Parent Mount");
  const internetdata = useInternet();
  return internetdata === true ? (
    <div>
      <h1>Contact Page</h1>
      <UserClass name={"joe"} />
      <UserClass name={"joemon"} />
      <UserCla name={"joemonvv"} />
    </div>
  ) : (
    <div>
      <h1>No Internet Connection</h1>
    </div>
  );
};

export default Contact;
