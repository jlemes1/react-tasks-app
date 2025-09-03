import { useState } from 'react';

function TaskForm({ createTask }) {
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		createTask(title);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder='Escribir tarea'
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<button>Agregar</button>
		</form>
	);
}

export default TaskForm;
