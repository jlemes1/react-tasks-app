import { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../data/tasks';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

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

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
