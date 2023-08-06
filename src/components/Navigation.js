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
      {/* <div className={`navbar-links ${isNavbarOpen ? 'open' : ''}`}> */}
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active" onClick={handleNavbarToggle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active" onClick={handleNavbarToggle}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" activeClassName="active" onClick={handleNavbarToggle}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active" onClick={handleNavbarToggle}>
                Contact
              </NavLink>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;
