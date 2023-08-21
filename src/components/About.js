import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <>
    <div class="box"><b></b>
    <section className='vh-100 vw-100 d-flex flex-column justify-content-start align-items-center text-center px-5 fw-bold about' id='about'>
      <h1 className='mt-3 p-5 fw-bold text-center'>About Me</h1>
      <div className='m-0 p-0 about-content'>
        <p>
            Hey! I'm a motivated full stack developer with a passion for E-commerce and data analytics. 
            I have over a decade in Accounting and Finance, where I've thrived in remote, goal-oriented environments.
            Furthermore, I love challenges and believe in embracing new technologies as opportunities to expand horizons. 
        </p>
        <p>        
            Whether it's building dynamic web applications or diving into the intricacies of data-driven insights, my enthusiasm drives me to create exceptional user experiences. 
            I bring a wealth of expertise in translating complex financial landscapes into coherent code while fostering efficient communication and collaboration.
        </p>
        <p>            
            Want to know more?
        </p>
        <a href="https://drive.google.com/file/d/1MYHBs4kdq5WNMwbLbpJeeE-PMclamAYb/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className='text-white fs-5'>
            <button className='my-4 fw-bold fs-4 p-2 see-projects-btn'>Check my resume</button>
        </a>
      </div>
    </section>
    </div>
    </>
  );
};

export default About;
