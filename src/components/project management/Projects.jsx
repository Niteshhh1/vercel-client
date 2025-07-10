import React from 'react'
import  { useState } from 'react';
import './project.css';
import AdminNavbar from '../adminNavbar/AdminNavbar';
import axios from 'axios';
import { useEffect } from 'react';

const Projects = () => {
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState([
    {
      name: 'Landing Page Redesign',
      image: 'https://via.placeholder.com/200',
      description: 'UI update for home page layout.',
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:3000/api/projects/create',formData);
    // setProjects(res.data);
    console.log(res);
    fetch();
    setFormData({ name: '', image: '', description: '' });
    setShowForm(false);
  } catch (error) {
    console.log(error);
  }
};
const fetch = async()=>{
    const res = await axios.get('http://localhost:3000/api/projects/get/all');
    setProjects(res.data);
  }
useEffect(()=>{
  fetch();
},[])
  return (
   <>
      <AdminNavbar/>
      <div className="project-page">
      <div className="project-header">
        <h2>Projects</h2>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Create Project'}
        </button>
      </div>

      {/* Show form if create button is clicked */}
      {showForm ? (
        <div className="center-form-panel">
          <form className="project-form" onSubmit={handleSubmit}>
            <input
            //   style={{backgroundColor:'black'}}
              type="text"
              name="name"
              placeholder="Project Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
           <input
              type="text"
              name="image"
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Project Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <button type="submit">Add Project</button>
          </form>
        </div>
      ) : (
        <div className="project-list">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <img src={proj.image} alt={proj.name} />
              <h3>{proj.name}</h3>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
   </>
  );
};

export default Projects;