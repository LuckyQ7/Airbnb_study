import { lazy } from "react";
import { Navigate } from "react-router-dom";
const Home = lazy(() => import("@/views/Home"));
const Entire = lazy(() => import("@/views/Entire"));
const Detail = lazy(() => import("@/views/Detail"));
const Demo = lazy(() => import("@/views/Demo"));

const routes = [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <Home /> },
  { path: "/detail", element: <Detail /> },
  { path: "/entire", element: <Entire /> },
  { path: "/demo", element: <Demo /> },
];

export default routes;
