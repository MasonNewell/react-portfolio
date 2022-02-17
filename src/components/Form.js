import React, { useState } from "react";
import "../styles/Form.css";
import { validateName, validateEmail, validateMessage } from "../utils/helpers";

function ContactForm() {
  // Name, Email, Message
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Error
  const [errorMessage, setErrorMessage] = useState("");

  // Form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Copy old object, change a key value pair
    const newInput = {
      ...inputFields,
      [name]: value,
    };
    setInputFields(newInput);
  };

  //   Form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate fields
    if (!validateName(inputFields.name)) {
      setErrorMessage("Name required.");
      return;
    }
    if (!validateEmail(inputFields.email)) {
      setErrorMessage("Invalid email address.");
      return;
    }
    if (!validateMessage(inputFields.message)) {
      setErrorMessage("Message field required.");
      return;
    }

    // Clear fields
    setInputFields({
      name: "",
      email: "",
      message: "",
    });
    setErrorMessage("");
  };

  return (
    <div>
      <h3>FORM</h3>
      <form className="form">
        <input
          value={inputFields.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={inputFields.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={inputFields.message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <div>
          <p>{errorMessage}</p>
        </div>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
