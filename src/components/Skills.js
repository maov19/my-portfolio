import React, { useState } from 'react';
import './styles/Skills.css';

const Skills = () => {
  const [isFlipped, setIsFlipped] = useState([false, false]);

  const handleCardClick = (index) => {
    const newFlippedStates = [...isFlipped];
    newFlippedStates[index] = !newFlippedStates[index];
    setIsFlipped(newFlippedStates);
  };

  return (
    <section className='skills-container' id='skills'>
      <h1 className='fw-bold pt-5 pb-0 m-0 text-center'>Skills</h1>
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
    </section>
  );
};

export default Skills;
