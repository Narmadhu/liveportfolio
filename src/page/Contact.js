import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <div className="center">
        <h1>Get in touch</h1>
      </div>
      <div className="container grid-2">
        <div>
          <form className="contact-form">
            <h3>Contact form</h3>
            <input type="text" placeholder="Name" className="form-input" />
            <input
              type="text"
              placeholder="E-mail"
              name=""
              className="form-input"
            />
            <textarea
              placeholder="Message"
              className="form-msg"
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit"> Send</button>
          </form>
        </div>
        <div>
          <h3>email</h3>
          <h6>nothing@gmail.com</h6>
          <h3>phone</h3>
          <h6>9876543210</h6>
          <h3>address</h3>
          <h6>123 west, Anna nagar, Chennai</h6>
        </div>
      </div>
    </div>
  );
}
export default Contact;
