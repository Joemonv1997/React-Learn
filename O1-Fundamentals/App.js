const heading = React.createElement("div", { id: "divid" }, [
  React.createElement(
    "h1",
    { key: "h1d" },
    "Hello From React JS Frontend in a file H1 1"
  ),
  React.createElement(
    "h1",
    { key: "h2d" },
    "Hello From React JS Frontend in a file H1 2"
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
