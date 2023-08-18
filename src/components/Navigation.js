import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css'; 

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar">
      <div className={`hamburger ${isNavbarOpen ? 'open' : ''}`} onClick={handleNavbarToggle}>
        <div className={`hamburger-line ${isNavbarOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isNavbarOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isNavbarOpen ? 'open' : ''}`}></div>
      </div>
      <div className="navbar-links" style={{ display: isNavbarOpen ? 'flex' : 'none' }}>
          <ul>
            <li>
              <a href='#intro' activeClassName="active" onClick={handleNavbarToggle}>
                Home
              </a>
            </li>
            <li>
              <a href='#projects' activeClassName="active" onClick={handleNavbarToggle}>
                Projects
              </a>
            </li>
            <li>
              <a href='#skills' activeClassName="active" onClick={handleNavbarToggle}>
                Skills
              </a>
            </li>
            <li>
              <a href='#contact' activeClassName="active" onClick={handleNavbarToggle}>
                Contact
              </a>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;
