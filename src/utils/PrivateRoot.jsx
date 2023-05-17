import React from "react";
import { isLoggedIn } from "./constants";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoot = () => {
  return localStorage.getItem(isLoggedIn) ? (
    <>
      <Outlet />
    </>
  ) : (
        <Navigate to={'/login'}/>
  );
};

export default PrivateRoot;
