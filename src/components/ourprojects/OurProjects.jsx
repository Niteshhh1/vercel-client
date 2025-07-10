import React from 'react';
import './ourprojects.css';
import projectphoto from '../../assets/projectPhoto.jpg'

const projects = [
  {
    image: projectphoto,
    title: 'Consultation',
    meta: 'Project Name • Location',
  },
  {
    image: projectphoto,
    title: 'Design',
    meta: 'Project Name • Location',
  },
  {
    image: projectphoto,
    title: 'Marketing & Design',
    meta: 'Project Name • Location',
  },
  {
    image: projectphoto,
    title: 'Consultation & Marketing',
    meta: 'Project Name • Location',
  },
  {
    image: projectphoto,
    title: 'Consultation',
    meta: 'Project Name • Location',
  },
  
  
];

const OurProjects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Our Projects</h2>
      <p className="section-subtitle">
        We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.
      </p>
      <div className="project-cards">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.meta}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
