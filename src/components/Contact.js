import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };

  return (
    <div className='bg-primary d-flex flex-column justify-content-center align-items-center' style={{ height: '50vh', width: '100vw'}}>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center align-items-center gap-2'>
        <label htmlFor="name"></label>
        <input className='w-100' type="text" id="name" placeholder='Name' required />

        <label htmlFor="message"></label>
        <textarea className='w-100' id="message" placeholder='Message' required></textarea>

        <button type="submit">Send message</button>
      </form>
    </div>
  );
};

export default Contact;
