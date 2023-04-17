import React from "react";

//components
import TodoItem from './TodoItem';

//import redux items
import  { useSelector } from 'react-redux'

const TodoList = () => {
    //will retrieve all todos from state and assign to todos variable
    const todos = useSelector(state => state.todos);

    return (
		<ul className='list-group' >
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
}

export default TodoList