import React from 'react';

const Counter3_State = () => {
	const initialObj = { fName2: '', lName2: '' };
	const [name, setName] = React.useState({ fName: '', lName: '' });
	const [name2, setName2] = React.useState(initialObj);

	return (
		<div>
			<h3>
				Counter3: {name.fName}&nbsp;
				{name.lName}
			</h3>
			<p>multiple useStates for different objects.</p>
			<form>
				<label htmlFor="fName">First Name: </label>
				{/* the spread operator is used to merge the updated object values to previous object.*/}
				<input type="text" placeholder="First Name" name="fName" id="fName" value={name.fName} onChange={(e) => setName({ ...name, fName: e.target.value })} />
				<span>&nbsp;{name.fName}</span>
				<br />
				<label htmlFor="lName">Last Name: </label>
				<input type="text" placeholder="Last Name" name="lName" id="lName" value={name.lName} onChange={(e) => setName({ ...name, lName: e.target.value })} />
				<span>&nbsp;{name.lName}</span>
				<br />
				<label htmlFor="lName">Last Name2: </label>

				<input type="text" placeholder="Last Name" name="lName" id="lName" value={name2.lName2} onChange={(e) => setName2({ lName2: e.target.value })} />
				<span>&nbsp;{name2.lName2}</span>
				<h3>{JSON.stringify(name)}</h3>
			</form>
			<hr />
		</div>
	);
};

export default Counter3_State;
