import React, { useState } from 'react';
import Button from './Button';
import { useTheme } from '../context/ThemeContext';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskManager = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    if (!text || !text.trim()) return;
    const newTask = { id: Date.now(), text: text.trim(), completed: false, createdAt: new Date().toISOString() };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold dark:text-white">Task Manager</h2>
        <Button variant="secondary" onClick={toggleTheme} className="!px-3">
          {isDarkMode ? '🌞' : '🌙'}
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <Button type="submit" variant="primary">Add Task</Button>
        </div>
      </form>

      <div className="flex gap-2 mb-4">
        <Button variant={filter === 'all' ? 'primary' : 'secondary'} size="sm" onClick={() => setFilter('all')}>All ({tasks.length})</Button>
        <Button variant={filter === 'active' ? 'primary' : 'secondary'} size="sm" onClick={() => setFilter('active')}>Active ({tasks.filter(t => !t.completed).length})</Button>
        <Button variant={filter === 'completed' ? 'primary' : 'secondary'} size="sm" onClick={() => setFilter('completed')}>Completed ({tasks.filter(t => t.completed).length})</Button>
      </div>

      <ul className="space-y-2 list-none p-0 m-0">
        {filteredTasks.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400 text-center py-4">No tasks found</li>
        ) : (
          filteredTasks.map(task => (
            <li key={task.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" />
                <span className={task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'dark:text-white'}>{task.text}</span>
              </div>
              <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)} aria-label="Delete task">Delete</Button>
            </li>
          ))
        )}
      </ul>

      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        <p>{tasks.filter(t => !t.completed).length} tasks remaining</p>
      </div>
    </div>
  );
};

export default TaskManager;