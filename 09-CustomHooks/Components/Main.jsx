import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./About";
import Body from "./Body";
import Error from "./Error";
import Header from "./Header";
import Restaurent from "./Restaurent";
import Shimmer from "./Shimmer";
const Cart = React.lazy(() => import("./Cart"));
const Contact = React.lazy(() => import("./Contact"));
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
        element: (
          <React.Suspense fallback={<Shimmer />}>
            <Contact />
          </React.Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <React.Suspense fallback={<Shimmer />}>
            <Cart />
          </React.Suspense>
        ),
      },
      {
        path: "/restaurent/:id",
        element: <Restaurent />,
      },
    ],
    errorElement: <Error />,
  },
]);
