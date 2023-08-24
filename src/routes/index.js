import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Dashboard, Cakes, Breads, Cookies } from "./elements";
import { appPaths } from "./paths";

export default function Router() {
  const routes = [
    {
      path: appPaths.Dashboard,
      element: <Layout />,
      children: [
        {
          path: appPaths.Dashboard,
          element: <Dashboard />,
        },
        {
          path: appPaths.Cakes,
          element: <Cakes />,
        },
        {
          path: appPaths.Breads,
          element: <Breads />,
        },
        {
          path: appPaths.Cookies,
          element: <Cookies />,
        },
      ],
    },
  ];
  return useRoutes(routes);
}
