import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
