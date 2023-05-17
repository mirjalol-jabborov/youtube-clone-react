import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle } from "../../redux/actions/authAction.js";
import googleIcon from "../../assets/images/google_icon.png";
import "./Login.scss";

const Login = () => {
  const isLoggedIn = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log(isLoggedIn);

  const handleSubmitWithGoogle = () => {
    dispatch(loginWithGoogle());
  };
  return (
    <div className="login">
      <div className="login-button" onClick={handleSubmitWithGoogle}>
        <div className="login-button__image">
          <img src={googleIcon} alt="google icon" />
        </div>
        <div className="login-button__text">
          <h5>
          Sign in with Google
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
