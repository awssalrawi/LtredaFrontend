import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/header.scss";
import { signUpCurrentUser } from "../authCourse/helperCourse";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="header header-phone">
        <Link to="/" className="text-decoration-none">
          <img src="./logo.png" alt="logo" className="logo" />
        </Link>
        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search product"
          />
          <button className="search__button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <nav className="user-nav" id="user-nav">
          <div className="user-nav__icon-box">
            <i className="fa-solid fa-cart-shopping user-nav__icon"></i>
            <span className="user-nav__notification">30</span>
          </div>
          <div className="dropdown user-nav__user">
            <Link
              to="#"
              className="dropdown-toggle user-nav__user-dropdown"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://picsum.photos/200"
                alt="user avatar"
                className="user-nav__user-photo"
              />
              <span className="user-nav__user-name">Aws</span>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link className="dropdown-item" to="/me">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  My Orders
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  My card
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Contact Center
                </Link>
              </li>
              <li>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    signUpCurrentUser(() => navigate("/"));
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>

          <Link to="/login" className="user-nav__loginBtnStyle">
            login
          </Link>
          <div className="user-nav__scrol">
            <i className="user-nav__scrol__icon fa-solid fa-trophy"></i>
            <span className="user-nav__scrol__level">Bronze</span>
            <span className="user-nav__scrol__value">point: 70</span>
          </div>
        </nav>
      </div>
      <nav className="phone-footer-nav" id="phone-footer-nav">
        <div className="phone-footer-nav__icon-box">
          <i className="fa-solid fa-house phone-footer-nav__icon"></i>
        </div>
        <div className="phone-footer-nav__icon-box">
          <i className="fa-solid fa-bars phone-footer-nav__icon"></i>
        </div>
        <div className="phone-footer-nav__icon-box">
          {/* <i className="fa-solid fa-cart-shopping phone-footer-nav__icon"></i> */}
          <i className="fa-brands fa-opencart phone-footer-nav__icon"></i>
          <span className="phone-footer-nav__notification">30</span>
        </div>
        <Link to="/login">login</Link>
        <div className="phone-footer-nav__icon-box">
          <i className="fa-regular fa-user phone-footer-nav__icon"></i>
        </div>

        <div className="phone-footer-nav__scrol">
          <i className="phone-footer-nav__scrol__icon fa-solid fa-trophy"></i>
          <span className="phone-footer-nav__scrol__level">Bronze</span>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
