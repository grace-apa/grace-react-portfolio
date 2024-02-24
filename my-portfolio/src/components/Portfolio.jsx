import React from "react";
import "../index.css";
import previewportfolio from "../images/previewportfolio.png";
import musicimage1 from "../images/musicimage1.jpg";
import fashionimage1 from "../images/fashionimage1.jpg";
import travelapp from "../images/travelapp.jpg";
import loveapp from "../images/loveapp.jpg";
import door from "../images/door.jpg";

const Portfolio = () => {
  return (
    <div>
      <h2 className="workHeading">My work</h2>
      <br />
      <div
        className="container-fluid content justify-content-center"
        id="portfolio-work"
      >
        <div className="row">
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card h-100" style={{ width: "22rem" }}>
              <a
                href="https://grace-apa.github.io/portfolio-grace-apantaku/#contact"
                target="_blank"
              >
                <img
                  src={previewportfolio}
                  className="card-img-top personal-photo"
                  alt="personal portfolio"
                />
              </a>
              <div className="card-body colour">
                <h5 className="card-title">Professional Portfolio</h5>
                <p className="card-text">
                  My professional web development portfolio using only HTML and
                  CSS.
                </p>
                <br />
                <a href="#" className="btn btn-primary html">
                  HTML
                </a>
                <a href="#" className="btn btn-primary html">
                  CSS
                </a>
              </div>
            </div>
          </div>
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card h-100" style={{ width: "22rem" }}>
              <a href="#">
                <img
                  src={musicimage1}
                  className="card-img-top music-photo"
                  alt="music note background image"
                />
              </a>
              <div className="card-body colour">
                <h5 className="card-title">LyricLab Challenge</h5>
                <p className="card-text">
                  A game that allows users to learn the lyrics to their
                  favourite songs.
                </p>
                <br />
                <a href="#" className="btn btn-primary html">
                  HTML
                </a>
                <a href="#" className="btn btn-primary html">
                  CSS
                </a>
                <a href="#" className="btn btn-primary html">
                  JavaScript
                </a>
              </div>
            </div>
          </div>
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card h-100" style={{ width: "22rem" }}>
              <a href="#">
                <img
                  src={fashionimage1}
                  className="card-img-top fashion-image"
                  alt="digital fashion app"
                />
              </a>
              <div className="card-body colour">
                <h5 className="card-title">StyleHub App</h5>
                <p className="card-text">
                  Share your shopping experience with friends who have a similar
                  style to you.
                </p>
                <br />
                <a href="#" className="btn btn-primary html">
                  HTML
                </a>
                <a href="#" cclassName="btn btn-primary html">
                  CSS
                </a>
                <a href="#" className="btn btn-primary html">
                  JavaScript
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid content">
        <div className="row">
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card h-100" style={{ width: "22rem" }}>
              <a href="#">
                <img
                  src={travelapp}
                  className="card-img-top travel-image"
                  alt="group travel app"
                />
              </a>
              <div className="card-body colour">
                <h5 className="card-title">Group Travel App</h5>
                <p className="card-text">
                  Travel application making group travel easy and convenient.
                </p>
                <br />
                <a href="#" className="btn btn-primary html">
                  HTML
                </a>
                <a href="#" className="btn btn-primary html">
                  CSS
                </a>
                <a href="#" className="btn btn-primary html">
                  JavaScript
                </a>
              </div>
            </div>
          </div>
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card h-100" style={{ width: "22rem" }}>
              <a href="#">
                <img
                  src={loveapp}
                  className="card-img-top love-image"
                  alt="love on the brain image"
                />
              </a>
              <div className="card-body colour">
                <h5 className="card-title">LOTB App</h5>
                <p className="card-text">
                  An online dating application similar to Bumble but with a
                  twist.
                </p>
                <br />
                <a href="#" className="btn btn-primary html">
                  HTML
                </a>
                <a href="#" className="btn btn-primary html">
                  CSS
                </a>
                <a href="#" className="btn btn-primary html">
                  JavaScript
                </a>
              </div>
            </div>
          </div>
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card h-100" style={{ width: "22rem" }}>
              <a href="#">
                <img
                  src={door}
                  className="card-img-top door-image"
                  alt="closed door and stairs image"
                />
              </a>
              <div className="card-body colour">
                <h5 className="card-title">OpenNetwork App</h5>
                <p className="card-text">
                  A networking and mentoring application for tech professionals.
                </p>
                <br />
                <a href="#" className="btn btn-primary html">
                  HTML
                </a>
                <a href="#" className="btn btn-primary html">
                  CSS
                </a>
                <a href="#" className="btn btn-primary html">
                  JavaScript
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Portfolio;
