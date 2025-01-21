import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, register, logIn, logOut } from './operations';
import customToast from '../../components/Toast/Toast';

const ERROR_TEXT = 'Oops... something went wrong, try again!';

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        const { uid, email } = payload.user;
        state.user = { uid, email };

        state.token = payload.token;
        state.isLoggedIn = true;
        customToast('success', 'Successful registration');
      })
      .addCase(register.rejected, state => {
        customToast('error', ERROR_TEXT);
        return state;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        const { uid, email } = payload.user;
        state.user = { uid, email };
        state.token = payload.token;
        state.isLoggedIn = true;
        customToast('success', 'Successful Log In');
      })
      .addCase(logIn.rejected, state => {
        customToast('error', ERROR_TEXT);
        return state;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
        customToast('success', 'Successful Log Out');
      })
      .addCase(logOut.rejected, state => {
        customToast('error', ERROR_TEXT);
        return state;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export default authSlice.reducer;
