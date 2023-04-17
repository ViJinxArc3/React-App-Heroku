import { configureStore } from "@reduxjs/toolkit";

//import slice
import todoReducer from './Slice';

export default configureStore({
  reducer: {
    todos: todoReducer, 
  },
})