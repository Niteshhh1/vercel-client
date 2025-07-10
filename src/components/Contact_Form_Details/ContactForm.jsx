import React, { useEffect } from 'react'
import './contactform.css'
import AdminNavbar from '../adminNavbar/AdminNavbar';
import axios from 'axios';
import { useState } from 'react';

function ContactForm() {
  const [user,setUser] = useState([]);
  // const users = [
  //   {
  //     name: 'Nitesh Patidar',
  //     email: 'nitesh@example.com',
  //     mobile: '9876543210',
  //     city: 'Indore',
  //   },
  //   {
  //     name: 'Mahima Sharma',
  //     email: 'mahima@example.com',
  //     mobile: '9123456780',
  //     city: 'Bhopal',
  //   },
  //   {
  //     name: 'Ravi Mehra',
  //     email: 'ravi@example.com',
  //     mobile: '9988776655',
  //     city: 'Ujjain',
  //   },
    
  // ];

  useEffect(()=>{
    async function fetch(){
       const res = await axios.get('http://localhost:3000/api/client/admin/all');
       setUser(res.data);
       console.log(res);
    }
    fetch();
  })
  return (
   <>
      <AdminNavbar/>
      <div className="users-page">
      <h2>All Users</h2>
      <div className="users-grid">
        {user.map((user, index) => (
          <div className="user-card" key={index}>
            <h2 style={{color:'black'}}>{user.fullname}</h2>
            <p style={{fontSize:'large'}}><strong>Email:</strong> {user.email}</p>
            <p style={{fontSize:'large'}}><strong>Mobile:</strong> {user.contact}</p>
            <p style={{fontSize:'large'}}><strong>City:</strong> {user.address}</p>
          </div>
        ))}
      </div>
    </div>
   </>
  );
};


export default ContactForm