import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="navbar glass">
      <div className="nav-content">
        <Link to="/" className="logo">
          Study<span>Sprint</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          {location.pathname !== '/dashboard' && (
            <Link to="/dashboard" className="nav-cta">Dashboard</Link>
          )}
        </div>

        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
