import React from "react";
import "./TextForm.css"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" aria-current="page" to="/TextForm">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/About">
              {props.aboutText}
            </Link>
          </li>
        </ul>
        <div style={{paddingLeft: "20px"}}>
        <div
          className={`form-check form-switch text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          <input
            className="form-check-input"
            // onClick={()=>{props.toggleMode(null)}}
            onClick={props.toggleMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Toggle Mode
          </label>
        </div>
        </div>
        
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
