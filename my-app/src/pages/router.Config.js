import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Main} from "./Main"
import {SideBar} from "./SideBar"
import {Blog} from "./Blog"
import {User} from "./User"

const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Home</h1>,
    },
    {
        path: "/Main",
        element: <Main></Main>,
      },
      {
        path: "/SideBar",
        element: <SideBar></SideBar>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/User",
        element: <User></User>,
      },
  ]);
  export default router
  
  
 