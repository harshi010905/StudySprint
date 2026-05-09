import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TaskManager from '../components/TaskManager';
import QuoteBox from '../components/QuoteBox';
import Timer from '../components/Timer';
import CompletionModal from '../components/CompletionModal';
import './Dashboard.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('study-sprint-tasks');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('study-sprint-stats');
    return saved ? JSON.parse(saved) : { sessions: 0, hours: 0, streak: 0, lastDate: null };
  });

  const [showModal, setShowModal] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    localStorage.setItem('study-sprint-tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('study-sprint-stats', JSON.stringify(stats));
  }, [stats]);

  const handleTimerComplete = (duration) => {
    const today = new Date().toDateString();
    let newStreak = stats.streak;
    
    if (stats.lastDate !== today) {
      if (stats.lastDate === new Date(Date.now() - 86400000).toDateString()) {
        newStreak += 1;
      } else {
        newStreak = 1;
      }
    }

    setStats(prev => ({
      ...prev,
      sessions: prev.sessions + 1,
      hours: prev.hours + duration / 60,
      streak: newStreak,
      lastDate: today
    }));

    const recentlyCompleted = tasks.filter(t => t.completed).length;
    setCompletedCount(recentlyCompleted);
    setShowModal(true);
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-content">
        <div className="dashboard-top">
          <QuoteBox />
        </div>
        
        <div className="dashboard-grid">
          <div className="grid-left">
            <Timer onComplete={handleTimerComplete} />
          </div>

          <div className="grid-center">
            <TaskManager tasks={tasks} setTasks={setTasks} />
          </div>
        </div>
      </div>

      <CompletionModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        stats={{
          sessions: stats.sessions,
          tasksCompleted: completedCount
        }}
      />
    </div>
  );
};

export default Dashboard;
