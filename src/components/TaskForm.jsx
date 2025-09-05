import { useState } from 'react';

function TaskForm({ createTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className='max-w-md mx-auto p-10'>
      <form
        className='bg-neutral-700 rounded-sm mb-4 p-10'
        onSubmit={handleSubmit}
      >
        <h1 className='text-2xl font-bold mb-4 text-white '>Crear tarea</h1>
        <input
          className='bg-neutral-100 p-3 w-full rounded-sm mb-2'
          placeholder='Escribir tarea'
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <textarea
          className='bg-neutral-100 rounded-sm p-3 w-full mb-2'
          placeholder='Escribir descripcion'
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className='bg-sky-500 p-2 text-white rounded-sm hover:bg-sky-400 cursor-pointer'>
          Agregar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
