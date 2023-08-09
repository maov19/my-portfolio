import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo'

const Intro = () => {

  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: '100vw'}}>
      <div>
        <Logo />
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center gap-3' style={{ height: '45vh', backgroundColor: '#1115'}}>
        <h1>Hey, I'm Martin.</h1>
        <h4 className='text-center w-75'>I'm a web developer. I like to create fun and interactive SPAs.</h4>
        {/* <button className='w-25'>Download my resume</button> */}
        <NavLink to="/projects" className="btn btn-dark mt-4">
          See my projects
        </NavLink>
      </div>
    </div>
  );
};

export default Intro;
