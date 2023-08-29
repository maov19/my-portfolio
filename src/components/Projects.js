import React from 'react';
import cycleCruiser from '../assets/screenshots/cyclecruiser-1.png'
import spaceTravelers from '../assets/screenshots/space-travelers-1.jpg'
import budgy from '../assets/screenshots/budget-app.png'
import cryptostats from '../assets/screenshots/cryptostats.png'

import './styles/Projects.css'; 


const Projects = () => {
  const projects = [
    {
      id: 1,
      image: cycleCruiser,
      title: 'CycleCruiser',
      description: 'Web app for a company that rents motorcycles. You can create, delete and make reservations to use motorcyles.',
      items: ['React', 'Rails', 'Bootstrap'],
      liveSite: 'https://cycle-cruise.onrender.com/',
      gitHub: 'https://github.com/c00p75/appointment-app-backend',
    },
    {
      id: 2,
      image: spaceTravelers,
      title: 'Space Travelers Hub',
      description: 'A Single Page Web App for a company that provides commercial and scientific space travel services.',
      items: ['React', 'Redux', 'CSS'],
      liveSite: 'https://space-travellers-ztro.onrender.com/',
      gitHub: 'https://github.com/maov19/space-travelers-hub',
    },
    {
      id: 3,
      image: budgy,
      title: 'Budget App',
      description: 'Mobile web application where you can manage your budget. you have a list of of transactions and categories, so you can see how much money you spent and on what.',
      items: ['Ruby on Rails', 'CSS'],
      liveSite: 'https://mysite-f67g.onrender.com/',
      gitHub: 'https://github.com/maov19/budget-app/',
    },
    {
      id: 4,
      image: cryptostats,
      title: 'Crypto Stats',
      description: 'A mobile web application that displays updated top 100 crypto prices and main stats, retrieved from a live feed API',
      items: ['React', 'Redux', 'CSS'],
      liveSite: 'https://crypto-stats.onrender.com/',
      gitHub: 'https://github.com/maov19/metrics-webapp/',
    },
    // Add more project objects here
  ];

  return (
    <div id='projects' className='container-background'>
    <h1 className='fw-bold pt-5 pb-2 text-center'>Projects</h1>
    <div className='projects-background'>      
      {projects.map((project) => (
        // <div className='cards-container'>
        <div className='triple-rounded' key={project.id} style={{backgroundColor: '#22333B', color: 'white', boxShadow: '0 1.2rem 0 #0f161a'}}>
        <img src={project.image} alt={project.title} className='border img-fluid mb-3 rounded'/>
          <h2 className='text-center fw-bold'>{project.title}</h2>
          <p className='text-center'>{project.description}</p>
          <ul className='w-100 d-flex flex-row justify-content-center align-items-center p-0 gap-1'>
            {project.items.map((item, index) => (
              <li 
                className='fw-bold p-1 border-none rounded' 
                style={{
                  backgroundColor: '#C6AC8F', 
                  color: '#22333b', 
                  cursor: 'pointer', 
              }} 
            key={index}>{item}</li>
            ))}
          </ul>
          <div className='d-flex flex-row gap-4 my-1'>
            <a href={project.gitHub} target="_blank" rel="noopener noreferrer" className='text-white fs-5'>
              <button className='GitHub-btn'>GitHub</button>
            </a>
            <a href={project.liveSite} target="_blank" rel="noopener noreferrer" className='text-white fs-5'>
              <button className='LiveSite-btn'>Live site</button>
            </a>
          </div>
        </div>
        // </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;
