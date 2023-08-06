import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: 'project1.jpg',
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      items: ['Item 1', 'Item 2', 'Item 3'],
      seeMoreImage: 'project1_large.jpg',
    },
    {
      id: 2,
      image: 'project2.jpg',
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      items: ['Item 1', 'Item 2', 'Item 3'],
      seeMoreImage: 'project2_large.jpg',
    },
    // Add more project objects here
  ];

  const handleSeeMore = (image) => {
    // Logic to display a pop-up with the larger image
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center gap-3' style={{ height: '100vh', width: '100vw'}}>
      {projects.map((project) => (
        <div className='bg-primary rounded w-75 d-flex flex-column justify-content-center align-items-center py-3' key={project.id}>
          <img src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
          <p className='text-center'>{project.description}</p>
          <ul className='w-100 d-flex flex-row justify-content-center gap-4'>
            {project.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className='d-flex flex-row gap-3'>
            <button onClick={() => handleSeeMore(project.seeMoreImage)}>See more</button>
            <button>Live site</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
