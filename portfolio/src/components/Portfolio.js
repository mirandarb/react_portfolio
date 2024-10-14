import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', deployedLink: '#', gitHubLink: '#' },
    { title: 'Project 2', deployedLink: '#', gitHubLink: '#' },
    // Add more projects here
  ];

  return (
    <section>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <a href={project.deployedLink}>View Deployed</a>
          <a href={project.gitHubLink}>View GitHub</a>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
