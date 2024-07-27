import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), task: action.payload, completed: false });
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const task = state.find(t => t.id === id);
      if (task) {
        task.task = updatedTask;
      }
    },
    deleteTask: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.find(t => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    }
  }
});

export const { addTask, editTask, deleteTask, toggleComplete } = taskSlice.actions;
export default taskSlice.reducer;
