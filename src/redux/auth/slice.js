import { createSlice } from '@reduxjs/toolkit';
import { refreshUserToken } from './operations';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: state => {
      state.isRefreshing = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isRefreshing = false;
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure: (state, action) => {
      state.isRefreshing = false;
      state.error = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(refreshUserToken.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshUserToken.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(refreshUserToken.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload || 'Failed to refresh token';
      });
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
