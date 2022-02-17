import React, { useState } from "react";
import "../styles/Form.css";

function ContactForm() {
  // Name, Email, Message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Error
  const [errorMessage, setErrorMessage] = useState("");

  // Form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target);
    return name === "name" ? setName(value) : "email" ? setEmail(value) : setMessage(value);
  };

  // Form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3>FORM</h3>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
