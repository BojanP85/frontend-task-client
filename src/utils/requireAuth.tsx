/* Protecting Routes which require user to be signed in */

import { useLocation, Navigate } from "react-router-dom";

export function RequireAuth({ children }: { children: JSX.Element }) {
  let location = useLocation();

  const isLogged = localStorage.getItem("loggedUser");

  if (!isLogged) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
