import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./components/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  }, // Define your reducers here
});

export default store;
