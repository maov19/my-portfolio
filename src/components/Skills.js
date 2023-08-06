import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
  const images = ['javascript_logo.png', 'react_logo.png', 'ruby_logo.png', 'tailwind_logo.png'];

  return (
    <div className='bg-primary d-flex flex-column justify-content-center align-items-center gap-3' style={{ height: '100vh', width: '100vw'}}>
      <h2>Skills</h2>
      <div className='row justify-content-center'>
        {images.map((image, index) => (
          <div key={index} className='col-md-6 col-lg-3'>
            <img src={image} alt={`Skill ${index + 1}`} className='img-fluid' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
