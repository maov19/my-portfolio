import React, { useState } from 'react';
import './styles/Skills.css';

import javascript from '../assets/skills/JavaScript_Logo.png'
import html from '../assets/skills/HTML5_logo.png'
import react from '../assets/skills/react-logo.png'
import bootstrap from '../assets/skills/Bootstrap_Logo.png'
import rails from '../assets/skills/rails-logo.png'
import python from '../assets/skills/python-logo.png'

const Skills = () => {
  const [isFlipped, setIsFlipped] = useState([false, false]);

  const handleCardClick = (index) => {
    const newFlippedStates = [...isFlipped];
    newFlippedStates[index] = !newFlippedStates[index];
    setIsFlipped(newFlippedStates);
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center gap-4 p-5' style={{height: '90vh', backgroundColor: '#dff706bb'}}>
      <div className={`flip-card ${isFlipped[0] ? 'flipped' : ''}`} onClick={() => handleCardClick(0)}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2>Hard Skills</h2>
          </div>
          <div className="flip-card-back">
            <ul className='skills-list'>
              <li><img src={javascript} alt='javascript' className='img-fluid'></img></li>
              <li><img src={html} alt='html' className='img-fluid'></img></li>
              <li><img src={react} alt='react' className='img-fluid'></img></li>
              <li><img src={bootstrap} alt='bootstrap' className='img-fluid'></img></li>
              <li><img src={rails} alt='rails' className='img-fluid'></img></li>
              <li><img src={python} alt='python' className='img-fluid'></img></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`flip-card ${isFlipped[1] ? 'flipped' : ''}`} onClick={() => handleCardClick(1)}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2>Soft Skills</h2>
          </div>
          <div className="flip-card-back">
            <ul className='skills-list'>
              <li className='soft-skills green'>Remote Working</li>
              <li className='soft-skills blue'>Pair programming</li>
              <li className='soft-skills blue'>Communication skills</li>
              <li className='soft-skills green'>Professional</li>
              <li className='soft-skills green'>Continuous Learning</li>
              <li className='soft-skills blue'>Challenge enthusiast</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
