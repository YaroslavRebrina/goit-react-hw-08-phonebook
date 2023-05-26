import { createSlice } from '@reduxjs/toolkit';
import { userSignup, userLogin, userLogout, userRefresh } from './operations';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  user: { name: null, email: null },

  JWT: null,
  isLoggedIn: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [userSignup.fulfilled](state, action) {
      console.log(action);
      state.user = action.payload.user;
      state.JWT = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [userLogin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.JWT = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [userLogout.fulfilled](state, action) {
      console.log(action);
      state.user = { name: null, token: null };
      state.JWT = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [userRefresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [userSignup.pending](state) {
      state.isLoading = true;
    },
    [userLogin.pending](state) {
      state.isLoading = true;
    },
    [userLogout.pending](state) {
      state.isLoading = true;
    },
    [userRefresh.pending](state) {
      state.isLoading = true;
    },
    [userSignup.rejected](state, action) {
      state.isLoading = false;
    },
    [userLogin.rejected](state, action) {
      state.isLoading = false;
    },
    [userLogout.rejected](state, action) {
      state.isLoading = false;
    },
    [userRefresh.rejected](state) {
      state.isLoading = false;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['JWT'],
};
export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
