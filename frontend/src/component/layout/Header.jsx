import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles/header.scss';
import { ReactComponent as CartIcon } from './../../assests/shopping-cart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userAction';
const Header = () => {
  const { loading, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const splitName = (name) => {
    if (name.split(' ')?.length === 1) return name;
    return name.split(' ')[0];
  };
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
            {/* <i className="fa-solid fa-cart-shopping user-nav__icon"></i> */}
            <CartIcon className="cart-icon" />
            <span className="cart-notification">15</span>
          </div>
          {!user || loading ? (
            <Fragment>
              <Link to="/login" className="user-nav__login-shape">
                <img
                  src="./user.png"
                  alt="user avatar"
                  className="user-nav__user-photo"
                />
                <span className="user-nav__login-shape-button">Login</span>
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <div className="dropdown user-nav__user">
                <Link
                  to="#"
                  className="dropdown-toggle user-nav__user-dropdown"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.picture ? (
                    <img
                      src={`${user.picture}`}
                      alt="user avatar"
                      className="user-nav__user-photo"
                    />
                  ) : (
                    <img
                      src="./user.png"
                      alt="user avatar"
                      className="user-nav__user-photo"
                    />
                  )}
                  {/* <img
                    src="https://picsum.photos/200"
                    alt="user avatar"
                    className="user-nav__user-photo"
                  /> */}
                  <span className="user-nav__user-name">
                    {user.name && splitName(user.name)}
                  </span>
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
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
                    <Link className="dropdown-item" to="/admin/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Contact Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={logoutHandler}
                      to="/"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="user-nav__scrol">
                <i className="user-nav__scrol__icon fa-solid fa-trophy"></i>
                <span className="user-nav__scrol__level">Bronze</span>
                <span className="user-nav__scrol__value">point: 70</span>
              </div>
            </Fragment>
          )}
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
