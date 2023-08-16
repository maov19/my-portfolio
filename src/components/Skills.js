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
    <section>
      <div class="main-content">
        <div class="palette__wrapper">
          <div class="palette palette--one">
            <div class="palette__cover" style={{backgroundColor: '#5E503F'}}>
              <div class="palette__cover__border"><span style={{backgroundColor: '#5E503F'}}>Hard Skills </span></div>
            </div>
            <div class="palette__cover__top"></div>
            <div class="palette__base">
              <div class="palette__shade"></div>
              <div class="palette__shade"></div>
              <div class="palette__shade"></div>
              <div class="palette__shade"></div>
              <div class="palette__shade"></div>
              <div class="palette__shade"></div>
            </div>
          </div>
        </div>
        <div class="palette__wrapper">
          <div class="palette palette--two">
            <div class="palette__cover" style={{backgroundColor: '#22333B'}}> 
              <div class="palette__cover__border"><span style={{backgroundColor: '#22333B'}}>Soft Skills</span></div>
            </div>
            <div class="palette__cover__top"></div>
            <div class="palette__base text-white fw-bold">
              <div class="palette__shade">Pair programming</div>
              <div class="palette__shade">Communication</div>
              <div class="palette__shade">Leadership</div>
              <div class="palette__shade">Problem solving</div>
              <div class="palette__shade">Fast learning</div>
              <div class="palette__shade">Work ethic</div>
            </div>
          </div>
        </div>
      </div>
    {/* <div className='d-flex flex-column justify-content-center align-items-center gap-2' style={{height: '94vh', backgroundColor: '#E4D6A7', paddingTop: '5vh'}}>
      <div className={`flip-card ${isFlipped[0] ? 'flipped' : ''}`} onClick={() => handleCardClick(0)}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2 className='fw-bold'>Hard Skills</h2>
          </div>
          <div className="flip-card-back">
            <ul className='hard-list'>
              <img src={javascript} alt='javascript' className='img-fluid'></img>
              <img src={html} alt='html' className='img-fluid'></img>
              <img src={react} alt='react' className='img-fluid'></img>
              <img src={bootstrap} alt='bootstrap' className='img-fluid'></img>
              <img src={rails} alt='rails' className='img-fluid'></img>
              <img src={python} alt='python' className='img-fluid'></img>
            </ul>
          </div>
        </div>
      </div>
      <div className={`flip-card ${isFlipped[1] ? 'flipped' : ''}`} onClick={() => handleCardClick(1)}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2 className='fw-bold'>Soft Skills</h2>
          </div>
          <div className="flip-card-back">
            <ul className='skills-list'>
              <li className='soft-skills green'>Remote Working</li>
              <li className='soft-skills blue'>Pair programming</li>
              <li className='soft-skills blue'>Communication skills</li>
              <li className='soft-skills green'>Fast Learner</li>
              <li className='soft-skills green'>Leadership skills</li>
              <li className='soft-skills blue'>Critical thinking</li>
            </ul>
          </div>
        </div>
      </div>
    </div> */}
    </section>
  );
};

export default Skills;
