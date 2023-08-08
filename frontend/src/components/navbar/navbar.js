import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="container-fluid bgNav">
      <div className="container">
        <nav className="navbar navbar-expand-sm align-middle">
          <a className="navbar-brand fs-4 fw-bold" href="#">
            JOY
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <Link className="nav-link fw-bold text-secondary" to={"/"}>
                  Shop
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  className="nav-link fw-bold text-secondary"
                  to={"/Orders"}
                >
                  Orders
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  className="nav-link fw-bold text-secondary"
                  to={"/Wishlist"}
                >
                  Wishlist
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  className="nav-link fw-bold text-secondary"
                  to={`notification`}
                >
                  Notification
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link fw-bold text-secondary" to={"/cart"}>
                  Cart
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  className="nav-link fw-bold text-secondary"
                  to={"/profile"}
                >
                  My Profile
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  className="nav-link fw-bold text-secondary"
                  to={"/dashborad"}
                >
                  Dashborad
                </Link>
              </li>
            </ul>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <div className="input-group-btn">
                <button className="btn btn-primary" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
