import React from "react";
import "../index.css";
import musicfy from "../images/Musicfy.png";
import generatepassword1 from "../images/generatepassword1.png";
import Weatherapp from "../images/Weatherapp.png";
import quizapp from "../images/quizcode.png";
import teamprofile from "../images/teamprofile.png";
import door from "../images/door.jpg";

const Portfolio = () => {
  return (
    <div>
      <h2 className="workHeading">My work</h2>
      <h6>(Click the image to see deployed version)</h6>
      <br />
      <div
        className="container-fluid content justify-content-center"
        id="portfolio-work"
      >
        <div className="row">
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card h-100" style={{ width: "22rem" }}>
              <a href="https://vilmaglynn.github.io/musicfy/" target="_blank">
                <img
                  src={musicfy}
                  className="card-img-top music-app"
                  alt="music app portfolio"
                />
              </a>
              <div className="card-body colour">
                <h5 className="card-title">Musicfy</h5>
                <p className="card-text">
                  An app inspired by Spotify app, it searches for an artists
                  album and articles related to that artist.
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
                <a href="#" className="btn btn-primary html">
                  JQuery
                </a>
                <a href="#" className="btn btn-primary html">
                  API
                </a>
                <br />
                <br />
                <a
                  className="github"
                  href="https://github.com/grace-apa/musicfy"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card h-100" style={{ width: "22rem" }}>
              <a
                href="https://grace-apa.github.io/-password-generator/"
                target="_blank"
              >
                <img
                  src={generatepassword1}
                  className="card-img-top password-photo"
                  alt="password generator background image"
                />
              </a>
              <div className="card-body colour">
                <h5 className="card-title">Password Generator</h5>
                <p className="card-text">
                  An application that you can use to generate a random password
                  based on criteria selected.
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
                <br />
                <br />
                <a
                  className="github"
                  href="https://github.com/grace-apa/-password-generator"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card h-100" style={{ width: "22rem" }}>
              <a
                href="https://grace-apa.github.io/Weather-dashboard/"
                target="_blank"
              >
                <img
                  src={Weatherapp}
                  className="card-img-top weatherapp-image"
                  alt="digital weather app"
                />
              </a>
              <div className="card-body colour">
                <h5 className="card-title">Weather Dashboard App</h5>
                <p className="card-text">
                  A weather dashboard app that features dynamically updated HTML
                  and CSS.
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
                <br />
                <br />
                <a
                  className="github"
                  href="https://github.com/grace-apa/Weather-dashboard"
                >
                  GitHub
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
              <a
                href="https://grace-apa.github.io/multiple-choice-quiz/"
                target="_blank"
              >
                <img
                  src={quizapp}
                  className="card-img-top quiz-image"
                  alt="coding quiz app"
                />
              </a>
              <div className="card-body colour">
                <h5 className="card-title">Coding Quiz Challenge</h5>
                <p className="card-text">
                  A timed coding quiz with multiple-choice questions. This app
                  features dynamically updated HTML and CSS powered by
                  JavaScript code.
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
                <br />
                <br />
                <a
                  className="github"
                  href="https://github.com/grace-apa/multiple-choice-quiz"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card h-100" style={{ width: "22rem" }}>
              <a href="#">
                <img
                  src={teamprofile}
                  className="card-img-top love-image"
                  alt="love on the brain image"
                />
              </a>
              <div className="card-body colour">
                <h5 className="card-title">Team Profile Generator</h5>
                <p className="card-text">
                  An application that takes in information about employees on a
                  software engineering team, then generates an HTML webpage that
                  displays summaries for each person.
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
                <br />
                <br />
                <a
                  className="github"
                  href="https://github.com/grace-apa/team-profile-generator"
                >
                  GitHub
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
                  (In progress)
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
