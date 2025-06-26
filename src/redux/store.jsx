// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projectslice';

export const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});
