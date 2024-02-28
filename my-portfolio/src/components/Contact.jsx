import React from "react";

const ContactForm = () => {
  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3 abstractBackground">
      <div className="container-fluid py-5">
        <div className="contact-form text-center">
          <h2>Contact Me</h2>
          <br />
          <br />
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name </label>
              <br />
              <input type="text" id="name" name="name" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="email">Your Email </label>
              <br />
              <input type="email" id="email" name="email" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="subject">Subject: </label>
              <br />
              <input type="subject" id="subject" name="subject" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="message">Message: </label>
              <br />
              <textarea id="message" name="message" rows="4" required />
            </div>
            <br />
            <button className="formButton" type="submit">
              <strong>Submit</strong>
            </button>
          </form>
          <br />
          <br />
          <br />
          <div>
            <a
              href="https://github.com/grace-apa"
              target="_blank"
              className="btn btn-primary contactlink"
            >
              <strong>GitHub</strong>
            </a>
            <a
              href="https://www.linkedin.com/in/graceapantaku/"
              target="_blank"
              className="btn btn-primary contactlink"
            >
              <strong>LinkedIn</strong>
            </a>
            <a
              href="mailto:grace.apantaku1@gmail.com"
              className="btn btn-primary contactlink"
            >
              <strong>Email</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
