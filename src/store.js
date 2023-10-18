import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import taskReducer from './slices/taskSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    tasks: taskReducer,
  },
});

export default store;
