import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary customNav">
        <div className="container-fluid bg-black">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo01"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about-me"
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/grace-react-portfolio/assets/CV.pdf"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
