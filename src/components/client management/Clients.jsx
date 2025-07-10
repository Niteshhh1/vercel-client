import React, { useEffect, useState } from 'react'
import './client.css'
import AdminNavbar from '../adminNavbar/AdminNavbar';
import axios from 'axios';

function Clients() {
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    designation:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    async function fetch(){
      const res = await axios.get('');
      console.log(res);
    }
    fetch();
  },[showForm,projects])

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      const res = await axios.post('http://localhost:3000/api/clients/create',formData);
      console.log(res.data);
      fetch();
      // setProjects([...projects, formData]);
      setFormData({ name: '', image: '', description: '',designation:'' });
      setShowForm(false);
    } catch (error) {
       console.log(error);
    }
  };

    const fetch = async()=>{
    const res = await axios.get('http://localhost:3000/api/clients/get/all');
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
        <h2>Clients</h2>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Create Client'}
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
              placeholder="Client Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="image"
            //   style={{backgroundColor:'black'}}
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="designation"
            //   style={{backgroundColor:'black'}}
              placeholder="Designation"
              value={formData.designation}
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
            <button type="submit">Add Client</button>
          </form>
        </div>
      ) : (
        <div className="project-list">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <img src={proj.image} alt={proj.name} />
              <h3>{proj.name}</h3>
              <p>{proj.description}</p>
              <p>{proj.designation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
   </>
  );
};

export default Clients