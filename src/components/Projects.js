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
      items: ['React', 'Rails', 'Bootstrap'],
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
    {
      id: 3,
      image: spaceTravelers,
      title: 'Space Travelers Hub',
      description: 'A Single Page Web App for a company that provides commercial and scientific space travel services.',
      items: ['React', 'Redux', 'CSS'],
      liveSite: 'https://space-travellers-ztro.onrender.com/',
      gitHub: 'https://github.com/maov19/space-travelers-hub',
    },
    {
      id: 4,
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
    <div className='container-background'>
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
              <li className='fw-bold p-1 border-none rounded' style={{backgroundColor: '#C6AC8F', color: '#22333b'}} key={index}>{item}</li>
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
