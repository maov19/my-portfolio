import React from 'react';

const Skills = () => {
  const images = ['javascript_logo.png', 'react_logo.png', 'ruby_logo.png', 'tailwind_logo.png'];

  return (
    <div>
      <h2>Skills</h2>
      <div className="carousel">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Skill ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
