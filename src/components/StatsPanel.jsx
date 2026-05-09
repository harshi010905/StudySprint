import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiClock, FiCalendar, FiTarget } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import './StatsPanel.css';

const StatsPanel = ({ stats }) => {
  const { theme } = useTheme();

  const statItems = [
    { label: 'Daily Streak', value: `${stats.streak} Days`, icon: <FiCalendar />, color: theme === 'dark' ? '#FFFFFF' : '#FF7675' },
    { label: 'Sessions', value: stats.sessions, icon: <FiTarget />, color: theme === 'dark' ? '#FFFFFF' : '#81C784' },
    { label: 'Total Hours', value: stats.hours.toFixed(1), icon: <FiClock />, color: theme === 'dark' ? '#FFFFFF' : '#64B5F6' },
    { label: 'Focus %', value: '92%', icon: <FiTrendingUp />, color: theme === 'dark' ? '#FFFFFF' : '#9575CD' }
  ];

  return (
    <div className="stats-panel glass">
      <h3>Productivity Stats</h3>
      <div className="stats-grid">
        {statItems.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="stat-item"
          >
            <div className="stat-icon" style={{ color: item.color, background: `${item.color}20` }}>
              {item.icon}
            </div>
            <div className="stat-info">
              <span className="stat-label">{item.label}</span>
              <span className="stat-value">{item.value}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsPanel;
