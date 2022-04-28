import React, { Fragment } from "react";

// import { UilUser } from "@iconscout/react-unicons";
import "./style/login.scss";
const Register = () => {
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
          <span className="auth__header">Register by email</span>
          <form action="#" className="auth__form">
            <div className="auth__input">
              <input
                type="text"
                placeholder="Name"
                className="auth__input-field"
                name="name"
              />
              <i className="uil uil-user icon-p"></i>
              {/* <UilUser className="awss"></UilUser> */}
              {/* <i className="uil uil-envelope icon-p"></i> */}
            </div>
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
            <div className="auth__input">
              <input
                type="password"
                placeholder="Password Confirm"
                className="auth__input-field passwords"
              />
              <i className="uil uil-lock icon-left"></i>
              {/* <i className="uil uil-eye icon-passShow"></i> */}
            </div>
            <div className="check-pass">
              <div className="check-container">
                <input type="checkbox" className="check" id="checkLog" />
                <label htmlFor="checkLog" className="check__text">
                  I have read and accepted all conditions
                </label>
              </div>
            </div>

            <div className="auth__btn">
              <input
                type="button"
                value="Register Now"
                className="auth__btn-login"
              />
            </div>
            <p className="text-align-center my-0">Or</p>
            <div className="auth__btn">
              <input
                type="button"
                value="Sign with Google"
                className="auth__btn-google"
              />
            </div>
            {/* <div className="auth__signup">
              <span className="signup-text">
                Not a member?
                <Link to="#" className="signup-link">
                  Signup Now
                </Link>
              </span>
            </div> */}
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
