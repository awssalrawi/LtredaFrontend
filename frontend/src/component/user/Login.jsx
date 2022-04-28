import React, { Fragment } from "react";
import "./style/login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  //* show and hide password functions
  function showHidePassword() {
    const passwordShowHide = document.querySelector(".icon-passShow");
    const passwordFields = document.querySelectorAll(".passwords");

    passwordFields.forEach((field) => {
      if (field.type === "password") {
        field.type = "text";
        passwordShowHide.classList.replace("uil-eye-slash", "uil-eye");
      } else {
        field.type = "password";
        passwordShowHide.classList.replace("uil-eye", "uil-eye-slash");
      }
    });
  }
  return (
    <Fragment>
      <div className="auth">
        <div className="auth__container">
          <span className="auth__header">Login </span>
          <form action="#" className="auth__form">
            <div className="auth__input">
              <input
                type="email"
                placeholder="Email"
                className="auth__input-field"
              />
              <i className="uil uil-envelope icon-left"></i>
            </div>
            <div className="auth__input">
              <input
                type="password"
                placeholder="Password"
                className="auth__input-field passwords"
              />
              <i className="uil uil-lock icon-left"></i>
              <i
                className="uil uil-eye-slash icon-passShow"
                onClick={showHidePassword}
              ></i>
            </div>
            <div className="check-pass">
              <div className="check-container">
                <input type="checkbox" className="check" id="checkLog" />
                <label htmlFor="checkLog" className="check__text">
                  Remember me
                </label>
              </div>
              <Link to="/forgotpassword" className="check__forgot">
                Forgot password?
              </Link>
            </div>

            <div className="auth__btn">
              <input
                type="button"
                value="Login Now"
                className="auth__btn-login"
              />
            </div>
            <div className="auth__signup">
              <span className="signup-text">
                Not a member?
                <Link to="/signup" className="signup-link">
                  Signup Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
