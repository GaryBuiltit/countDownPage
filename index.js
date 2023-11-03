import React from "react";
import {createRoot} from "react-dom/client"
import { StrictMode } from "react";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./routes/Dashboard";
import Create from "./routes/CreateCountDown";
import Pages from "./routes/Pages";

const router = createHashRouter([
  {
    path: "/",
    element: <DashBoard/>,
    children: [
      {
        path: "create/",
        element: <Create/>
      },
      {
        path: "pages/",
        element: <Pages/>
      },
    ]
  }
])

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>
)



