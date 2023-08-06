import React from 'react';

const Intro = () => {
  return (
    <div className='bg-primary d-flex flex-column justify-content-center align-items-center gap-3' style={{ height: '50vh', width: '100vw'}}>
      <h1>Hey, I'm Martin.</h1>
      <h4 className='text-center'>I'm a web developer. I like to create fun and interactive SPAs.</h4>
      {/* <button className='w-25'>Download my resume</button> */}
      <a href='/projects' className='text-center w-50 text-dark'>Check my projects</a>
    </div>
  );
};

export default Intro;
