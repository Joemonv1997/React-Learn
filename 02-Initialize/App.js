import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("h1", {}, "Hello from second part");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
