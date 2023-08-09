import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='d-flex flex-column align-items-center' style={{ height: '90vh', width: '100vw', backgroundColor: '#dff706bb'}}>
      <h2 className='my-5' style={{fontSize: '2.5rem'}}>Contact</h2>
      <p className='fs-3 w-75 text-center mb-4'>Do you think I can help you with a project or idea? Reach out!</p>
      <form onSubmit={handleSubmit} className='w-100 h-50 fs-4 d-flex flex-column justify-content-center align-items-center gap-3'>
        <label htmlFor="name"></label>
        <input className='w-75 h-25 p-3 border rounded' type="text" id="name" placeholder='Name' required />

        <label htmlFor="message"></label>
        <textarea className='w-75 h-100 p-3 border rounded' id="message" placeholder='Message' required></textarea>

        <button className='my-4 p-3 GitHub-btn' type="submit">Send</button>
      </form>
      <div class="social-links d-flex justify-content-end mt-5">
        <a href="https://www.facebook.com/martin.ossa/" class="btn btn-social btn-facebook"><i class="fab fa-facebook-f fs-1"></i></a>
        <a href="https://twitter.com/maov08" class="btn btn-social btn-twitter"><i class="fab fa-twitter fs-1"></i></a>
        <a href="https://github.com/maov19" class="btn btn-social btn-github"><i class="fab fa-github fs-1"></i></a>
      </div>
    </div>
  );
};

export default Contact;
