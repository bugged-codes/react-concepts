import { useState } from 'react';

const ReactToDo = () => {
	const arr = [];
	const [todos, setTodos] = useState(arr);
	const [task, setTask] = useState('');

	const handleInputChange = (e) => {
		setTask(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos([...todos, task]);
	};
	return (
		<div>
			<h2>Todo in react</h2>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="todo-input">Todo: </label>
				<input type="text" id="todo-input" placeholder="Enter Todo..." value={task} name="todo" onChange={(e) => handleInputChange(e)} />
				<button type="submit">Add</button>
			</form>

			<div>
				{todos.map((task, i) => {
					return <li key={i}>{task}</li>;
				})}
			</div>
		</div>
	);
};
export default ReactToDo;
