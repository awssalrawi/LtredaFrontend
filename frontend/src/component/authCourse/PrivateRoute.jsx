import React from "react";
import { Outlet } from "react-router-dom";
import { isAuthenticated } from "./helperCourse";
import Login from "./../user/Login";

const PrivateRoute = () => {
  const isAuth = isAuthenticated();
  return isAuth ? <Outlet /> : <Login />;
};

export default PrivateRoute;
