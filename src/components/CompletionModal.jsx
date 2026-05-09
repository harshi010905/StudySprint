import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FiX, FiCheck } from 'react-icons/fi';
import './CompletionModal.css';

const CompletionModal = ({ isOpen, onClose, stats }) => {
  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#81C784', '#E0F2F1', '#556B2F']
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="modal-content glass"
        >
          <button className="close-modal" onClick={onClose}><FiX /></button>
          
          <div className="modal-icon">
            <FiCheck />
          </div>
          
          <h2>Sprint Completed!</h2>
          <p className="subtitle">Amazing work. You're one step closer to your goals.</p>
          
          <div className="modal-stats">
            <div className="m-stat">
              <span className="m-val">{stats.sessions}</span>
              <span className="m-lbl">Total Sprints</span>
            </div>
            <div className="m-stat">
              <span className="m-val">{stats.tasksCompleted}</span>
              <span className="m-lbl">Tasks Done</span>
            </div>
          </div>
          
          <button className="modal-btn" onClick={onClose}>Continue Focusing</button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CompletionModal;
