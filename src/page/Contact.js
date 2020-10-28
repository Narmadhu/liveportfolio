import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const updateInput = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.id]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div id="contact">
      <div className="center title">
        <h2>Get in touch</h2>
      </div>
      <div className="container grid-2">
        <div>
          {/* {{ msg }} */}
          <form
            className="contact-form"
            id="contact-form"
            onSubmit={submitForm}
            method="POST"
            action="send"
          >
            <h3>Contact form</h3>
            <input
              type="text"
              placeholder="Name"
              className="form-input"
              id="name"
              value={state.name}
              onChange={updateInput}
            />
            <input
              type="text"
              placeholder="E-mail"
              id="email"
              className="form-input"
              value={state.email}
              onChange={updateInput}
            />
            <textarea
              placeholder="Message"
              className="form-msg "
              cols="30"
              rows="10"
              id="msg"
              value={state.msg}
              onChange={updateInput}
            ></textarea>
            <input
              type="file"
              placeholder="Upload file"
              id="file"
              className="form-input"
              // value={state.email}
              // onChange={updateInput}
            />
            <button type="submit"> Send</button>
          </form>
        </div>
        <div className="address">
          <h3>Email</h3>
          <h6>nothing@gmail.com</h6>
          <h3>Phone</h3>
          <h6>9876543210</h6>
          <h3>Address</h3>
          <h6>123 west, Anna nagar, Chennai</h6>
        </div>
      </div>
    </div>
  );
}
export default Contact;
