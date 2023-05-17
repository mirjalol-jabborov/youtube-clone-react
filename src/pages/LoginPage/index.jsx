import React from "react";
import Login from "../../components/Login";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/constants";

const LoginPage = () =>
  localStorage.getItem(isLoggedIn) ? <Navigate to="/" /> : <Login />;

export default LoginPage;
