import React, { Fragment } from "react";
import "./styles/categories.scss";
const Categories = () => {
  return (
    <Fragment>
      <div className="container mt-100">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="card mb-30">
              <a className="card-img-tiles" href="#" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src="https://i.imgur.com/O0GMYuw.jpg" alt="Category" />
                  </div>
                  <div className="thumblist">
                    <img src="https://i.imgur.com/ILEU18M.jpg" alt="Category" />
                    <img src="https://i.imgur.com/2kePJmX.jpg" alt="Category" />
                  </div>
                </div>
              </a>
              <div className="card-body text-center">
                <h4 className="card-title">Laptops</h4>
                <p className="text-muted">Starting from $499</p>
                <a
                  className="btn btn-outline-primary btn-sm"
                  href="#"
                  data-abc="true"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card mb-30">
              <a className="card-img-tiles" href="#" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src="https://i.imgur.com/uRgdVY1.jpg" alt="Category" />
                  </div>
                  <div className="thumblist">
                    <img src="https://i.imgur.com/VwSKS7A.jpg" alt="Category" />
                    <img src="https://i.imgur.com/gTvZ2H5.jpg" alt="Category" />
                  </div>
                </div>
              </a>
              <div className="card-body text-center">
                <h4 className="card-title">Mobiles</h4>
                <p className="text-muted">Starting from $50</p>
                <a
                  className="btn btn-outline-primary btn-sm"
                  href="#"
                  data-abc="true"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card mb-30">
              <a className="card-img-tiles" href="#" data-abc="true">
                <div className="inner">
                  <div className="main-img">
                    <img src="https://i.imgur.com/0jO40CF.jpg" alt="Category" />
                  </div>
                  <div className="thumblist">
                    <img src="https://i.imgur.com/dWYAg41.jpg" alt="Category" />
                    <img src="https://i.imgur.com/5oQEZSC.jpg" alt="Category" />
                  </div>
                </div>
              </a>
              <div className="card-body text-center">
                <h4 className="card-title">Accessories</h4>
                <p className="text-muted">Starting from $9</p>
                <a
                  className="btn btn-outline-primary btn-sm"
                  href="#"
                  data-abc="true"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
