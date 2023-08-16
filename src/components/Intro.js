import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo'

const Intro = () => {

  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: '100vw', height: '94vh'}}>
      <div className='h-50'>
        <Logo />
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center h-50' style={{color: 'white', backgroundColor: "#0A0908"}}>
        <h2 className='fw-bold'>Hey, I'm Martin.</h2>
        <p className='text-center w-75'>I'm a web developer. I like to create fun and interactive SPAs.</p>
        {/* <button className='w-25'>Download my resume</button> */}
        <NavLink to="/projects">
          <button className='see-projects-btn fw-bold p-2 my-1'>
            See my projects
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Intro;
