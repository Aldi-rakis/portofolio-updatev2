// redux/projectSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch semua project (sekali saja)
export const fetchProjects = createAsyncThunk('projects/fetchAll', async () => {
  const res = await axios.get('http://31.97.50.232:3200/api/projects');
  return res.data.data;
});

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    list: [],
    status: 'idle', // 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
