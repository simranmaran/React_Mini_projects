// todoSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: []
  },
  reducers: {
    addToTask: (state, action) => {
      state.todos.push(action.payload); // Fixed 'task' to 'todos'
    },
    deleteTask: (state, action) => {
      state.todos.splice(action.payload, 1); // Delete by index
    }
  }
});

export const { addToTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
