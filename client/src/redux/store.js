import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchacc'
import cartReducer from './cartstore'
export const store = configureStore({
  reducer: {
    search: searchReducer,
    cartstore: cartReducer,
  },
})