import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api/tasks';

export const fetchTasks = createAsyncThunk('tasks/fetch', async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data;
});

export const addTask = createAsyncThunk('tasks/add', async (title) => {
  const res = await axios.post(API_BASE_URL, { title });
  return res.data;
});

export const toggleTask = createAsyncThunk('tasks/toggle', async (id) => {
  const res = await axios.put(`${API_BASE_URL}/${id}`);
  return res.data;
});

export const deleteTask = createAsyncThunk('tasks/delete', async (id) => {
  await axios.delete(`${API_BASE_URL}/${id}`);
  return id;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(toggleTask.fulfilled, (state, action) => {
        const index = state.items.findIndex(t => t._id === action.payload._id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(t => t._id !== action.payload);
      });
  }
});

export default taskSlice.reducer;