import React from 'react';
import cycleCruiser from '../assets/screenshots/cyclecruiser-1.png'
import spaceTravelers from '../assets/screenshots/space-travelers-1.jpg'
import './styles/Projects.css'; 


const Projects = () => {
  const projects = [
    {
      id: 1,
      image: cycleCruiser,
      title: 'CycleCruiser',
      description: 'Web app to create, delete and make reservations to use Motorcyles.',
      items: ['React', 'Redux', 'Rails'],
      liveSite: 'https://thecyclecruise.onrender.com/',
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
    // Add more project objects here
  ];

  return (
    <div className='d-flex flex-column align-items-center justify-content-center gap-4 mt-5' style={{ height: '100vh', width: '100vw'}}>
      {projects.map((project) => (
        <div className='rounded w-75 d-flex flex-column justify-content-center align-items-center p-4' style={{backgroundColor: '#3332'}} key={project.id}>
          <img src={project.image} alt={project.title} className='img-fluid mb-3'/>
          <h2 className='text-center'>{project.title}</h2>
          <p className='text-center'>{project.description}</p>
          <ul className='w-100 d-flex flex-row justify-content-center gap-4'>
            {project.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className='d-flex flex-row gap-5'>
            <a href={project.gitHub} target="_blank" rel="noopener noreferrer" className='text-white fs-5'>
              <button className='custom-button GitHub-btn'>GitHub</button>
            </a>
            <a href={project.liveSite} target="_blank" rel="noopener noreferrer" className='text-white fs-5'>
              <button className='custom-button LiveSite-btn'>Live site</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
