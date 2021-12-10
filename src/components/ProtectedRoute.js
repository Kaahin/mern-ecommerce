import React, { useContext } from "react";
import { Navigate } from "react-router";
import UserContext from "../context/GlobalState";

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(UserContext);
  return auth ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
