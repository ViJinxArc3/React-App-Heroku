import React, { useState } from 'react';
import '../App.css'

//import redux items
import { useDispatch } from 'react-redux';
import { addTodo } from './Slice'


const TodoForm = () => {
    //state value to store user types
	const [value, setValue] = useState('');

    const dispatch = useDispatch();
    //onSubmit button that is called when form is submitted
	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addTodo({
            title: value,
        }))
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>To Do Item:</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default TodoForm;