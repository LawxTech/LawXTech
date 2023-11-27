import React, { useState } from "react";

const Contact: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  const subscribe = () => {
    const formData = {
      "First Name": firstName,
      "Last Name": lastName,
      Email: email,
      "Phone Number": phoneNumber,
      Message: message,
    };

    fetch("https://formsubmit.co/rofiatolusanya12@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Subscription successful!");
          resetForm();
        } else {
          alert("Subscription failed. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Subscription failed. Please try again later.");
      });
  };

  return <div>{/* Contact content */}</div>;
};

export default Contact;
