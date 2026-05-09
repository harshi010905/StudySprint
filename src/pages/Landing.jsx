import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <Hero />
    </div>
  );
};

export default Landing;
