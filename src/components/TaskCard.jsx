import ModalCard from './ModalCard';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {
  const { deleteTask, editTask } = useContext(TaskContext);

  return (
    <div className='bg-neutral-700 text-white rounded-sm p-4 text-center'>
      <h1 className='text-2xl font-bold uppercase'>{task.title}</h1>
      <p className='text-md'>{task.description}</p>
      <button
        className='bg-red-500 p-2 rounded-sm m-4 hover:bg-red-400 cursor-pointer'
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
      <ModalCard task={task} onEdit={editTask} />
    </div>
  );
}

export default TaskCard;
