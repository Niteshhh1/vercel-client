import React from 'react';
import './admindashboard.css';
import AdminNavbar from '../../components/adminNavbar/AdminNavbar';
import {Link} from 'react-router-dom'

const AdminDashboard = () => {
  const summary = [
    { icon: '📁', label: 'Project Management', count: 5,path:'projects' },
    { icon: '👥', label: 'Client Management', count: 3,path:'clients' },
    { icon: '📨', label: 'Contact Form Details', count: 12 ,path:'contact'},
    { icon: '📬', label: 'Subscribed Email Addresses', count: 20,path:'subscribed' },
  ];

  return (
    <>
      <AdminNavbar/>
      <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-grid">
        {summary.map((item, index) => (
          <div style={{fontSize:'larger'}} className="summary-card" key={index}>
            <div className="icon">{item.icon}</div>
            <Link style={{color:'white'}} to={`/admin/${item.path}`}><p style={{fontSize:'large'}}>{item.label}</p></Link>
            <p style={{fontSize:'large'}}>Total: {item.count}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;
