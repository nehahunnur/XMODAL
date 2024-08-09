import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const validateForm = () => {
    const { email, phone, dob } = formData;

    // Email validation
    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return false;
    }

    // Phone number validation
    if (phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }

    // Date of Birth validation
    const today = new Date();
    const dobDate = new Date(dob);
    if (dobDate >= today) {
      alert("Invalid date of birth. Please check your date of birth.");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      closeModal();
      alert("Form submitted successfully!");
      setFormData({
        username: "",
        email: "",
        phone: "",
        dob: "",
      });
    }
  };

  return (
    <div className="app">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email Address:</label>
                <input
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  id="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
