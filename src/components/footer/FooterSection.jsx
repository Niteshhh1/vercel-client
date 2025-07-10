import React, { useState } from 'react';
import './footersection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AdminLogin from '../admin_login/AdminLogin';
import axios from 'axios';

const FooterSection = () => {
  const [adminlogin, setadminlogin] = useState(false)
  const [subscribeEmail,setSubcribeEmail] = useState('');

  const submitSubscribeEmail = async() => {
      try {
        const res = await axios.post('http://localhost:3000/api/subscribe', { email: subscribeEmail });
        console.log(res.data);
        alert("Subscribed Successfully")
        setSubcribeEmail('');
      } catch (error) {
         console.log(error);
      }
  }

  return (
    <>
      {/* CTA Background Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Learn more about our listing process,<br />as well as our additional staging and design work.</h2>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      {/* Middle Footer (Blue Bar) */}
      <section className="footer-links">
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
          <button onClick={()=>setadminlogin(true)} style={{width:'60px',height:'20px'}}>Admin</button>
          {adminlogin && <AdminLogin setadminlogin={setadminlogin}/>}
        </div>
        <div className="newsletter">
          <label>Subscribe to:</label>
          <input onChange={(e)=>setSubcribeEmail(e.target.value)} type="email" placeholder="Enter Email Address" />
          <button onClick={submitSubscribeEmail}>Subscribe</button>
        </div>
      </section>

      {/* Bottom Footer (Dark Bar) */}
      <footer className="bottom-footer">
        <p>All Rights Reserved © 2025</p>
        <div className="social-icons">
          <i className="fab fa-twitter" />
          <i className="fab fa-instagram" />
          <i className="fab fa-facebook-f" />
          <i className="fab fa-linkedin-in" />
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
