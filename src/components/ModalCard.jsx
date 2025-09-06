import { useState } from 'react';

function ModalCard({ task, onEdit }) {
  const [isopen, setIsopen] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
  });

  const handleSubmit = () => {
    onEdit(task.id, editedTask);
    setIsopen(false);
  };

  return (
    <>
      <button
        className='bg-amber-400 p-2 rounded-sm text-white hover:bg-amber-300 cursor-pointer'
        onClick={() => setIsopen(true)}
      >
        Editar
      </button>
      {isopen && (
        <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
          <div className='bg-neutral-700 p-5 rounded flex flex-col justify-center items-center gap-5'>
            <div>
              <input
                className='w-full p-3 mb-2 bg-neutral-100 text-neutral-400 rounded-sm'
                placeholder='Escribir tarea'
                value={editedTask.title}
                onChange={(e) =>
                  setEditedTask({ ...editedTask, title: e.target.value })
                }
              />
              <textarea
                className='w-full p-3 mb-2 bg-neutral-100 text-neutral-400 rounded-sm'
                placeholder='Escribir descripcion'
                value={editedTask.description}
                onChange={(e) =>
                  setEditedTask({ ...editedTask, description: e.target.value })
                }
              ></textarea>
            </div>
            <div>
              <button
                className='bg-green-500 p-2 rounded-sm text-white hover:bg-green-400 cursor-pointer'
                onClick={handleSubmit}
              >
                Guardar
              </button>

              <button
                className='bg-red-500 rounded-sm text-white m-4 p-2 hover:bg-red-400 cursor-pointer'
                onClick={() => setIsopen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalCard;
