import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" required></textarea>

        <button type="submit">Send message</button>
      </form>
    </div>
  );
};

export default Contact;
