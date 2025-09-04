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
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Escribir tarea'
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <textarea
        placeholder='Escribir descripcion de la tarea'
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></textarea>
      <button>Agregar</button>
    </form>
  );
}

export default TaskForm;
