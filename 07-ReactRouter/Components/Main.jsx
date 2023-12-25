import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./About";
import Body from "./Body";
import Cart from "./Cart";
import Contact from "./Contact";
import Error from "./Error";
import Header from "./Header";
import Restaurent from "./Restaurent";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
    </div>
  );
};

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurent/:id",
        element: <Restaurent />,
      },
    ],
    errorElement: <Error />,
  },
]);
