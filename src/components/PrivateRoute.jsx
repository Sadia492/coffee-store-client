import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { loading, user } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
}
