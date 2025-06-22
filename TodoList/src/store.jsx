// store.jsx
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.jsx";  // Rename myReducer to todoReducer

const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});

export default store;
