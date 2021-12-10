import React, { useContext } from "react";
import { Navigate } from "react-router";
import UserContext from "../context/GlobalState";

const ProtectedRouteAdmin = ({ children }) => {
  const { auth } = useContext(UserContext);
  return auth ? children : <Navigate to={"/admin"} />;
};

export default ProtectedRouteAdmin;
