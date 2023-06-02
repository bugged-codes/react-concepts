import React from 'react';

const Counter4_State = () => {
	const arr = [];
	const [items, setItems] = React.useState(arr);

	const addItem = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1,
			},
		]);
	};
	return (
		<div>
			<h3>Counter4: {`[ ${[items.map((i) => i.value)]} ]`}</h3>
			<p>single useState with single array of objects.</p>
			<button onClick={addItem}>Add a number</button>
			<ul>
				{items.map((item) => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
			<hr />
		</div>
	);
};

export default Counter4_State;
