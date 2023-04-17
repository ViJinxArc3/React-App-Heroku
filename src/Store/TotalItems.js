import React from "react";
import '../App.css'

//import redux
import { useSelector } from "react-redux";

const TotalItems = () => {
    const completedTodos = useSelector((state) => 
    state.todos.filter((todo) => todo.completed === true));

    return (
        <h4 className="mt-3">
            Total items completed: {completedTodos.length}
        </h4>
    )
}

export default TotalItems