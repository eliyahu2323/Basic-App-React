import { Suspense, lazy } from "react";
// import Spinner from "../components/Layout/Spinner";

const Loadable = (Component) => (props) =>
  (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );

export const Dashboard = Loadable(lazy(() => import("../pages/Dashboard")));
export const Cakes = Loadable(lazy(() => import("../pages/Cakes")));
export const Cookies = Loadable(lazy(() => import("../pages/Cookies")));
export const Breads = Loadable(lazy(() => import("../pages/Breads")));

