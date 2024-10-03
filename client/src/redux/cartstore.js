import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartstore',
  initialState:{
    cartCount: 0,
  },
  reducers: {
    setCartTerm: (state, action) => {
      state.cartCount = action.payload;
    },
  },
});

export const { setCartTerm } = cartSlice.actions;
export const selectCartTerm = (state) => state.cartstore.cartCount;
export default cartSlice.reducer;
