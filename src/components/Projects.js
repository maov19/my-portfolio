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
    // Add more project objects here
  ];

  const handleSeeMore = (image) => {
    // Logic to display a pop-up with the larger image
  };

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <img src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <ul>
            {project.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={() => handleSeeMore(project.seeMoreImage)}>See more</button>
          <button>Live site</button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
