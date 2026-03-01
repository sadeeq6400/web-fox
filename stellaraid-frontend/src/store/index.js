import { configureStore } from '@reduxjs/toolkit';

// A simple placeholder reducer to fulfill the requirements until actual features are added
const rootReducer = (state = {}, action) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
