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
    [userSignup.pending](state) {
      state.isLoading = true;
    },
    [userSignup.fulfilled](state, action) {
      console.log(action);
      state.user = action.payload.user;
      state.JWT = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [userSignup.rejected](state, action) {
      console.log(action.payload.message);
      state.isLoading = false;
    },
    [userLogin.pending](state) {
      state.isLoading = true;
    },
    [userLogin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.JWT = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [userLogin.rejected](state, action) {
      console.log(action.payload.message);
      state.isLoading = false;
    },
    [userLogout.pending](state) {
      state.isLoading = true;
    },
    [userLogout.fulfilled](state, action) {
      console.log(action);
      state.user = { name: null, token: null };
      state.JWT = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [userLogout.rejected](state, action) {
      state.isLoading = false;
    },
    [userRefresh.pending](state) {
      state.isLoading = true;
    },
    [userRefresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
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
