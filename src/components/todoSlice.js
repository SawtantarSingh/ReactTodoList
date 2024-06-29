import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      task: "Charge Laptop",
      completed: false,
      editing: false,
    },
    {
      id: 2,
      task: "Pack Batteries",
      completed: false,
      editing: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    getEditTodo(state, action) {
      const updatedArray = [];
      state.todos.filter((todo) => {
        if (todo.id === action.payload.id) {
          todo.id = action.payload.id;
          todo.task = action.payload.task;
          todo.completed = action.payload.completed;
        }
        updatedArray.push(todo);
      });
    },

    toggleTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    clearTodoList(state, action) {
      state.todos = [];
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, getEditTodo, clearTodoList } =
  todoSlice.actions;

export const getTodo = (state) => state.todo.todos;

export const getCompletedTodo = (id) => (state) =>
  state.todo.todos.find((todo) => todo.id === id)?.completed;

export default todoSlice.reducer;
