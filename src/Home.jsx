import React from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="container  text-center p-5 mt-5 py-5  m-5 ">
        <h1 className="display-3 text-success fw-bold">Nature's Basket</h1>
        <p className="lead" >Fresh to your Door..!!</p>
        <NavLink to="/getstarted" className="btn btn-warning btn-lg mt-3">
          Get Started
        </NavLink>
      </div>
      {/* About Section */}
      <div className="bg-light py-5 mt-5 text-center container p-3 m-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center  p-5 mt-5">
              <h2 className="fw-bold">About Our Products</h2>
              <p>
                We believe in innovation and excellence. Our products are
                tailored to meet your needs, ensuring satisfaction and quality.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  High Performance
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  User Friendly
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Affordable Pricing
                </li>
              </ul>
              <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="h1.jpg"
                className="img-fluid rounded shadow"
                alt="About"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center py-5">
        <h2 className="fw-bold">Stay Connected</h2>
        <p className="mb-4">Have questions? Feel free to reach out to us.</p>
        <div className="text-center mt-4">
          <Link to="/contact" className="btn btn-success btn-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
