import React from "react";
import UserCla from "./UserCla";
import UserClass from "./UserClass";

const Contact = () => {
  console.log("Parent Mount");
  return (
    <div>
      <h1>Contact Page</h1>
      <UserClass name={"joe"} />
      <UserClass name={"joemon"} />
      <UserCla name={"joemonvv"} />
    </div>
  );
};

export default Contact;
