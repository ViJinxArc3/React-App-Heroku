import { createSlice } from "@reduxjs/toolkit";

//todo slice function to control and updating the state
const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        { 
        id: 1, 
        title: "Bake a Cake", 
        completed: false 
        },
        { 
        id: 2, 
        title: "Study", 
        completed: false 
        },
        { 
        id: 3, 
        title: "Do Laundry", 
        completed: false }
    ],
    reducers: {
        //when called, this reducer will handle the action
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            //will add new todo to the end of the array
            state.push(newTodo)
        },

        //mark todo item as complete
        clickAsComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        //delete todo item
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id)
     },

     editTodo: (state, action) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        state[index].title = action.payload.title;
      },
     
    },
        //delete function that will give all todos that do not equal the id in payload
   

});

//retrieve actions
export const { addTodo, clickAsComplete, deleteTodo, editTodo } = todoSlice.actions; 

//add to store
export default todoSlice.reducer;

