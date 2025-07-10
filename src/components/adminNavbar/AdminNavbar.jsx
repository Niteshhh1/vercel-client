import React from 'react';
import './adminnavbar.css';
import { FaHome, FaUserShield, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="left">
        <FaUserShield className="nav-icon" />
        <span className="nav-title">Admin</span>
      </div>

      <div className="right">
        <FaHome className="nav-icon" title="Home" />
        <Link style={{color:'white'}} to='/admin'><FaSignOutAlt  className="nav-icon" title="Logout" /></Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
