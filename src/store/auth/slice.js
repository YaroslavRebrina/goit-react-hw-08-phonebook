import { createSlice } from '@reduxjs/toolkit';
import { userSignup } from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false, name: null, JWT: null, isLoading: false },
  extraReducers: {
    [userSignup.pending](state) {
      state.isLoading = true;
    },
    [userSignup.fulfilled](state, payload) {
      state.isLoading = true;
      console.log(payload);
    },
  },
});

export const authReducer = authSlice.reducer;
