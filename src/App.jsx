import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { tasks as data } from './data/tasks';
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

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function editTask(taskId, updatedTask) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              title: updatedTask.title,
              description: updatedTask.description,
            }
          : task,
      ),
    );
  }

  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto'>
        <TaskForm createTask={createTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </main>
  );
}

export default TaskManager;
