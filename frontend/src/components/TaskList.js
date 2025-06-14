import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, toggleTask, deleteTask } from '../features/tasks/taskSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.items);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h2>Tasks ({tasks.length})</h2>
      {tasks.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
          No tasks yet. Add one above to get started!
        </p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task._id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <div className="task-content">
                <span className="task-title">
                  {task.title}
                </span>
                <div className="task-meta">
                  <small>Created: {new Date(task.createdAt || task.updatedAt).toLocaleDateString()}</small>
                </div>
              </div>
              <div className="task-actions">
                <button 
                  className="toggle-btn"
                  onClick={() => dispatch(toggleTask(task._id))}
                  title={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
                >
                  {task.completed ? '✓ Completed' : '○ Mark Complete'}
                </button>
                <button 
                  className="delete-btn"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this task?')) {
                      dispatch(deleteTask(task._id));
                    }
                  }}
                  title="Delete task"
                >
                  🗑️ Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;