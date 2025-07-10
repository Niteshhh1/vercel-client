import React, { useState } from 'react';
import './adminlogin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({setadminlogin}) => {

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error,setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError('');
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async(e) => {
     e.preventDefault();
   try {
        const res = await axios.post('http://localhost:3000/api/get/admin',credentials);

        const adminUser = res.data.user;

        setadminlogin(false);
        console.log('Logging in with:', adminUser);
        navigate('/admin',{state:{adminUser}});
   } catch (error) {
       console.error('Login failed:', error.response?.data?.message || error.message);
       setError('Invalid Admin')
   }
  };

  return (
    <>
        <div  className="admin-login-overlay">
          <div className="admin-login-box">
             <button className="close-btn" onClick={() => setadminlogin(false)}>X</button>
            <h3>Admin Login</h3>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                // style={{color:'black'}}
                placeholder="Admin Email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                // style={{color:'black'}}
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
              <button type="submit">Login</button>
              {error}
            </form>
          </div>
        </div>
    </>
  );
};

export default AdminLogin;
