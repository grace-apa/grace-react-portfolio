import React from "react";
// import picture from "../assets"
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const About = () => {
  return (
    <div className="customDiv">
      <div className="container-fluid" id="introAbout">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 text-center">
            <h2>About Me</h2>
            <br />
            <p className="aboutMe">
              A <strong>Frontend Developer</strong> with a background in
              <strong> Advertising and Influencer Marketing</strong>. I
              specialize in building intuitive and user-friendly interfaces that
              provide exceptional user experiences. I enjoy creating visually
              appealing user-friendly websites, and thrive on delivering
              seamless digital experiences through efficient written code. I am
              currently developing{" "}
              <strong>
                skills in HTML, CSS, JavaScript, UI development, REST APIs, GIT,
              </strong>{" "}
              and a variety of other frameworks, as part of edX 16-week Frontend
              Development Bootcamp. I’m learning and applying the latest
              technologies, frameworks and best practices in web design and
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
