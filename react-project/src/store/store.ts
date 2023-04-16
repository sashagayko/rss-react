import { configureStore } from '@reduxjs/toolkit';

import rootReducer from 'redux';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
