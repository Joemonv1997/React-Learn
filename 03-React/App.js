import React from "react";
import ReactDOM from "react-dom/client";

// const header = React.createElement("h1", {}, "Hello from second part");
const Head = () => (
  <h1>Heading Component</h1>
);
const jsxheader = (
  <div>
    {Head()}
    <h2>Hello from h2 Tag</h2>
    <h1>Hello From JSX Header</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheader);
