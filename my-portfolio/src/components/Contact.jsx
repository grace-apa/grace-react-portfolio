import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <br />
      <br />
      <form>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <br />
          <input type="text" id="name" name="name" required />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <br />
          <input type="email" id="email" name="email" required />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="message">Message: </label>
          <br />
          <textarea id="message" name="message" rows="4" required />
        </div>
        <br />
        <button className="formButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
