import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_p8rb9ib', 'template_q55nopo', form.current, 'ktioT6I_93iz0HNuF')
      .then((result) => {
        console.log(result.text);
        setMessageSent(true); // Set the state to true when the email is sent
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='d-flex flex-column align-items-center form-container' style={{ height: '100vh', width: '100vw', backgroundColor: '#22333B', color: 'white', paddingTop: '10vh'}}>
      <h2 class='fw-bold'>Contact</h2>
      <p className='w-75 text-center'>Do you think I can help you with a project or idea? Reach out!</p>
      {/* <form onSubmit={handleSubmit} className='w-100 h-75 fs-6 d-flex flex-column justify-content-center align-items-center gap-2'> */}
      <form ref={form} onSubmit={sendEmail} className='w-100 h-75 fs-6 d-flex flex-column justify-content-center align-items-center gap-2'>
        <label htmlFor="name"></label>
        <input type="text" name="user_name" className='w-75 h-25 p-2 border rounded' placeholder='Name' required />

        <label htmlFor="email"></label>
        <input type="email" name="user_email" placeholder='E-mail' className='w-75 h-25 p-2 border rounded' pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" required />

        <label htmlFor="message"></label>
        <textarea name="message" className='w-75 h-75 p-2 border rounded' id="message" placeholder='Message' required></textarea>

        {messageSent ? (
          <p className="fw-bold my-3">Your message was sent!</p>
        ) : (
          <button className='p-2 my-3 GitHub-btn' type="submit">Send</button>
        )}

        <div class="social-links d-flex justify-content-end">
          <a href="https://www.facebook.com/martin.ossa/" class="btn btn-social btn-facebook text-white" ><i class="fab fa-facebook-f fs-3"></i></a>
          <a href="https://twitter.com/maov08" class="btn btn-social btn-twitter"><i class="fab fa-twitter fs-3 text-white"></i></a>
          <a href="https://github.com/maov19" class="btn btn-social btn-github"><i class="fab fa-github fs-3 text-white"></i></a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
