import TaskCard from './TaskCard';

function TaskList({ tasks, deleteTask, editTask }) {
  if (tasks.length === 0) {
    return (
      <h1 className='text-4xl font-bold text-white text-center'>
        No hay tareas aun
      </h1>
    );
  }

  return (
    <div className='grid grid-cols-4 gap-4'>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
