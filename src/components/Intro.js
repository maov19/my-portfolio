import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo'
import './styles/Intro.css'

const Intro = () => {

  return (
    <div className='d-flex flex-md-row flex-column justify-content-center align-items-center intro-container' style={{ width: '100vw', height: '94vh'}}>
      <div className='intro-logo'>
        <Logo />
      </div>
      <div className='intro-info' style={{color: 'white', backgroundColor: "#0A0908"}}>
        <h2 className='fw-bold'>Hey, I'm Martin.</h2>
        <p className='w-75'>I'm a web developer. I like to create fun and interactive websites.</p>
        {/* <button className='w-25'>Download my resume</button> */}
        <NavLink to="/projects">
          <button className='see-projects-btn fw-bold p-2 my-1'>
            Check my projects
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Intro;
