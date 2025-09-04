import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { tasks as data } from './tasks';
import { useState, useEffect } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks + 1,
        description: task.description,
      },
    ]);
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default TaskManager;
