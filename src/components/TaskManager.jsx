import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiTrash2, FiCheckCircle, FiCircle } from 'react-icons/fi';
import './TaskManager.css';

const TaskManager = ({ tasks, setTasks }) => {
  const [input, setInput] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
      createdAt: new Date()
    };
    setTasks([newTask, ...tasks]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="task-manager glass">
      <h3>Tasks</h3>
      
      <form onSubmit={addTask} className="task-input-container">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="task-input"
        />
        <button type="submit" className="add-btn"><FiPlus /></button>
      </form>

      <div className="task-list">
        <AnimatePresence initial={false}>
          {tasks.map((task) => (
            <motion.div 
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              whileHover={{ scale: 1.02 }}
              className={`task-card ${task.completed ? 'completed' : ''}`}
            >
              <button onClick={() => toggleTask(task.id)} className="check-btn">
                {task.completed ? <FiCheckCircle color="#81C784" /> : <FiCircle />}
              </button>
              <span className="task-text">{task.text}</span>
              <button onClick={() => deleteTask(task.id)} className="delete-btn">
                <FiTrash2 />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {tasks.length === 0 && (
          <p className="empty-state">No tasks for today. Start small!</p>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
