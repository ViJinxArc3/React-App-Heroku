import React from 'react';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

//add Components
import TodoList from './Store/Todolist';
import TodoForm from './Store/TodoForm';
import TotalItems from './Store/TotalItems';

function App() {
  return (
    <div className='App'>
    <div className='container bg-white p-4 mt-5'>
     <h1>My Todo List</h1>
     <TodoForm />
     <TodoList />
     <TotalItems />
    </div>
    </div>
  );
}

export default App;