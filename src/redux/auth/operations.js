import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebase';

export const refreshUserToken = createAsyncThunk(
  'auth/refreshUserToken',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;

    if (!token) return rejectWithValue('User not authenticated');

    try {
      const user = auth.currentUser;
      if (user) {
        const token = await user.getIdToken(true);
        return { token };
      }
      return rejectWithValue('User not authenticated');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
