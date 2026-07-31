// redux/projectSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch semua project (sekali saja)
export const fetchProjects = createAsyncThunk('projects/fetchAll', async () => {
  const res = await axios.get('https://rakis.mietemporary.my.id/api/projects');
  return res.data.data;
});

// Fetch project by ID
export const fetchProjectById = createAsyncThunk('projects/fetchById', async (id) => {
  const res = await axios.get(`https://rakis.mietemporary.my.id/api/projects/${id}`);
  return res.data.data;
});

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    list: [],
    currentProject: null,
    status: 'idle', // 'loading' | 'succeeded' | 'failed'
    projectDetailStatus: 'idle',
    error: null,
    projectDetailError: null,
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
      })
      .addCase(fetchProjectById.pending, (state) => {
        state.projectDetailStatus = 'loading';
        state.currentProject = null;
      })
      .addCase(fetchProjectById.fulfilled, (state, action) => {
        state.projectDetailStatus = 'succeeded';
        state.currentProject = action.payload;
      })
      .addCase(fetchProjectById.rejected, (state, action) => {
        state.projectDetailStatus = 'failed';
        state.projectDetailError = action.error.message;
      });
  },
});

export default projectSlice.reducer;
