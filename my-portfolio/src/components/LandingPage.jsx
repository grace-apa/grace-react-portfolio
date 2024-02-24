import React from "react";
import "../index.css";
import me from "../images/me.png";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  return (
    <div>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3 abstractBackground">
        <div className="container-fluid py-5">
          <div className="text-center">
            <img src={me} className="rounded" alt="personal portfolio photo" />
          </div>
          <h1 className="display-5 fw-bold fullName">Grace Apantaku</h1>
          <a href="https://www.linkedin.com/in/graceapantaku/" target="_blank">
            <button className="btn btn-primary btn-lg button" type="button">
              From Influencer Marketer to Junior Frontend Developer
            </button>
          </a>
          <br />
          <br />
          <br />
          <div>
            <a
              href="https://github.com/grace-apa"
              target="_blank"
              className="btn btn-primary links"
            >
              <strong>GitHub</strong>
            </a>
            <a
              href="https://www.linkedin.com/in/graceapantaku/"
              target="_blank"
              className="btn btn-primary links"
            >
              <strong>LinkedIn</strong>
            </a>
            <a
              href="mailto:grace.apantaku1@gmail.com"
              className="btn btn-primary links"
            >
              <strong>Email</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
