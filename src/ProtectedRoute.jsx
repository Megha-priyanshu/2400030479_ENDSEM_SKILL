<<<<<<< HEAD
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("loggedIn");

  return isLoggedIn ? children : <Navigate to="/" />;
=======
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
>>>>>>> 93bc3fc0c12cf93a19751dc0c950a7d55cda7966
}
