import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#personal-info'); // Set default active link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a
              href="#personal-info"
              className={activeLink === '#personal-info' ? 'active' : ''}
              onClick={() => handleLinkClick('#personal-info')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeLink === '#skills' ? 'active' : ''}
              onClick={() => handleLinkClick('#skills')}
            >
              Skills
            </a>
          </li>
          <li>
          <a
              href="#experience"
              className={activeLink === '#experience' ? 'active' : ''}
              onClick={() => handleLinkClick('#experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeLink === '#projects' ? 'active' : ''}
              onClick={() => handleLinkClick('#projects')}
            >
              Projects
            </a>
          </li>
          <li>
          <a
              href="#education"
              className={activeLink === '#education' ? 'active' : ''}
              onClick={() => handleLinkClick('#education')}
            >
              Education
            </a>
            
          </li>
          <li>
          <a
              href="#testimony"
              className={activeLink === '#testimony' ? 'active' : ''}
              onClick={() => handleLinkClick('#testimony')}
            >
              Testimonies
            </a>
            
          </li>
          <li>
          <a
              href="#contact"
              className={activeLink === '#contact' ? 'active' : ''}
              onClick={() => handleLinkClick('#contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
