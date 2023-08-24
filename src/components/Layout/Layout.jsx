import React from "react";
import { Outlet } from "react-router-dom";

import Toolbar from "./Toolbar";

const Layout = () => {
  return (
    <div>
      <Toolbar />
      <Outlet />
    </div>
  );
};

export default Layout;
