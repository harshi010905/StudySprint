import React, { useState, useEffect, useCallback } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiPause, FiRotateCcw } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import './Timer.css';

const MODES = {
  SPRINT: { label: 'Focus Sprint', minutes: 25, color: '#81C784' },
  SHORT: { label: 'Short Break', minutes: 5, color: '#64B5F6' },
  LONG: { label: 'Long Break', minutes: 15, color: '#9575CD' }
};

const Timer = ({ onComplete }) => {
  const [mode, setMode] = useState('SPRINT');
  const [timeLeft, setTimeLeft] = useState(MODES.SPRINT.minutes * 60);
  const [isActive, setIsActive] = useState(false);

  const resetTimer = useCallback(() => {
    setIsActive(false);
    setTimeLeft(MODES[mode].minutes * 60);
  }, [mode]);

  useEffect(() => {
    resetTimer();
  }, [mode, resetTimer]);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      onComplete(MODES[mode].minutes);
      // Play sound
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
      audio.play();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, mode, onComplete]);

  const toggleTimer = () => setIsActive(!isActive);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const percentage = (timeLeft / (MODES[mode].minutes * 60)) * 100;
  const isLast10 = timeLeft <= 10 && timeLeft > 0;
  const { theme } = useTheme();

  const getPathColor = () => {
    if (theme === 'dark') return '#FFFFFF';
    return MODES[mode].color;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="timer-container glass"
    >
      <div className="timer-modes">
        {Object.keys(MODES).map((m) => (
          <button 
            key={m}
            className={mode === m ? 'active' : ''}
            onClick={() => setMode(m)}
          >
            {MODES[m].label}
          </button>
        ))}
      </div>

      <div className={`timer-display ${isLast10 ? 'shake-pulse' : ''} ${isActive ? 'active-pulse' : ''}`}>
        <CircularProgressbar
          value={percentage}
          text={formatTime(timeLeft)}
          strokeWidth={6}
          styles={buildStyles({
            pathColor: getPathColor(),
            textColor: 'var(--text-main)',
            trailColor: 'rgba(0,0,0,0.05)',
            pathTransitionDuration: 1,
          })}
        />
      </div>

      <div className="timer-controls">
        <button onClick={resetTimer} className="control-btn"><FiRotateCcw /></button>
        <button onClick={toggleTimer} className="control-btn main-btn">
          {isActive ? <FiPause /> : <FiPlay />}
        </button>
      </div>

      <p className="session-label">{MODES[mode].label}</p>
    </motion.div>
  );
};

export default Timer;
