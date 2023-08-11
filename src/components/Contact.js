import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='d-flex flex-column align-items-center' style={{ height: '93vh', width: '100vw', backgroundColor: '#dff706bb', paddingTop: '10vh'}}>
      <h2 style={{fontSize: '1.5rem`'}}>Contact</h2>
      <p className='fs-6 w-75 text-center'>Do you think I can help you with a project or idea? Reach out!</p>
      <form onSubmit={handleSubmit} className='w-100 h-75 fs-6 d-flex flex-column justify-content-center align-items-center gap-2'>
        <label htmlFor="name"></label>
        <input className='w-75 h-25 p-2 border rounded' type="text" id="name" placeholder='Name' required />

        <label htmlFor="message"></label>
        <textarea className='w-75 h-75 p-2 border rounded' id="message" placeholder='Message' required></textarea>

        <button className='p-2 my-3 GitHub-btn' type="submit">Send</button>
        <div class="social-links d-flex justify-content-end">
          <a href="https://www.facebook.com/martin.ossa/" class="btn btn-social btn-facebook"><i class="fab fa-facebook-f fs-3"></i></a>
          <a href="https://twitter.com/maov08" class="btn btn-social btn-twitter"><i class="fab fa-twitter fs-3"></i></a>
          <a href="https://github.com/maov19" class="btn btn-social btn-github"><i class="fab fa-github fs-3"></i></a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
