import { configureStore } from '@reduxjs/toolkit';
import snakeReducer from './SnakeSlice';

export const store = configureStore({
  reducer: {
    snake: snakeReducer,
  },
});
