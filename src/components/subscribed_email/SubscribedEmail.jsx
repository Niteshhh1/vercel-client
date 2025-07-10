import React, { useEffect } from 'react'
import AdminNavbar from '../adminNavbar/AdminNavbar';
import './subscribedemail.css'
import axios from 'axios';
import { useState } from 'react';

function SubscribedEmail() {
  const [email,setEmail] = useState([]);
  //  const users = [
  //   {
  //     email: 'nitesh@example.com',
  //   },
  //   {
  //     email: 'mahima@example.com',
  //   },
  //   {
  //     email: 'ravi@example.com',
  //   },
    
  // ];

  useEffect(()=>{
    async function fetch(){
       const res = await axios.get('http://localhost:3000/api/admin/subscribed-emails');
       setEmail(res.data);
       console.log(res);
    }
    fetch();
  })

  return (
   <>
      <AdminNavbar/>
      <div className="users-page">
      <h2>Subscribed Email Addresses</h2>
      <div className="users-grid">
        {email.map((user, index) => (
          <div className="user-card" key={index}>
            <p style={{color:'black', fontSize:'larger'}}><strong>Email :</strong> {user.email}</p>
          </div>
        ))}
      </div>
    </div>
   </>
  );
};


export default SubscribedEmail