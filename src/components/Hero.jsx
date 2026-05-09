import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-main"
        >
          <h1>Focus Smarter.<br /><span>Study Better.</span></h1>
          <p>The aesthetic productivity workspace designed to help you achieve your goals through focused sprints and mindful breaks.</p>
          <div className="hero-btns">
            <Link to="/dashboard" className="btn-primary">Start Sprint</Link>
            <a href="#features" className="btn-secondary">Learn More</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
