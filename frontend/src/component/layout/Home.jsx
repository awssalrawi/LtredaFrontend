import React, { Fragment } from "react";
import "./styles/home.scss";
import HomeFeatures from "../homeFeatures/HomeFeatures";
import Product from "../products/Product";
import PhoneHeaderHome from "./../layout/PhoneHeaderHome";
const Home = () => {
  return (
    <Fragment>
      <PhoneHeaderHome />
      <HomeFeatures />
      <h4 className="text-align-center my-2">Latest product</h4>
      <Product />
    </Fragment>
  );
};

export default Home;
