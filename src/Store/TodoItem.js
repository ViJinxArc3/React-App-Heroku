import React, { useState } from "react";

//import redux items
import { useDispatch } from "react-redux";
import { clickAsComplete, deleteTodo, editTodo } from "./Slice";


const TodoItem = ({ id, title, completed }) => {
    //to add dispatched actions and state hooks
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const dispatch = useDispatch();
    

    //function to mark todo item as complete
    const handleCompleted = () => {
        dispatch(clickAsComplete({ id: id, completed: !completed }))
    };

    //function to delete item
    const handleDeleted = () => {
        dispatch(deleteTodo({ id: id }))
    };

    //functions to handle editing todo item ---
    const handleEdit = () => {
        setIsEditing(true);
      };
    
      //cancel editing
      const handleCancel = () => {
        setIsEditing(false);
        setNewTitle(title);
      };
    
      //save edited iten
      const handleSave = () => {
        dispatch(editTodo({ id: id, title: newTitle }));
        setIsEditing(false);
      };
      
      //change edited item 
      const handleChange = (e) => {
        setNewTitle(e.target.value);
      };
      
      //if statement added. if in an edited state, the program 
      //should change - (Delete and Edit buttons falls away and 
      //selected item becomes an input bar to which the user
      //can then edit their item. Save and cancel buttons added)
      if (isEditing) {
        return (
          <li className={`list-group-item ml-3`}>
            <div className="d-flex justify-content-between">
              <input type="text" value={newTitle} onChange={handleChange} />
              <div>
                <button onClick={handleSave} className="btn btn-success">
                  Save
                </button>
                <button onClick={handleCancel} className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </div>
          </li>
        );
      }

    return (
		<li className={`list-group-item ${completed && 'list-group-item-success'} ml-3`} >
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-5' onChange={handleCompleted} checked={completed}></input>
					<p className="title">{title}</p>
				</span>
                <div>
				<button onClick={handleDeleted} className='btn btn-danger'>Delete</button>
                <button onClick={handleEdit} className='btn btn-primary'>Edit</button>
                </div>
			</div>
		</li>
	);
};

export default TodoItem;