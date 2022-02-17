import React, { useState } from "react";
import "../styles/Form.css";

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
    // Clear fields
    setInputFields({
      name: "",
      email: "",
      message: "",
    });
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
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
