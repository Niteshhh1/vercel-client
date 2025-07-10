import React from 'react'
import './navbar.css'

function NavBar() {
   return (
    <nav className="navbar">
      <div className="logo">Real Trust</div>
      <ul className="nav-link">
        <li ><a style={{color:'black',fontSize:'large'}} href="/">Home</a></li>
         <li><a style={{color:'black',fontSize:'large'}} href="#about">About</a></li> 
        <li><a style={{color:'black',fontSize:'large'}} href="#projects">Projects</a></li>
        <li><a style={{color:'black',fontSize:'large'}} href="#clients">Clients</a></li>
        <li><a style={{color:'black',fontSize:'large'}} href="#subscribe">Subscribe</a></li> 
      </ul>
      <button className='navbar-button'>Contact</button>
    </nav>
  );
}

export default NavBar