import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
 
export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        const token = await user.getIdToken();
        return {
          token,
          user: {
            uid: user.uid,
            email: user.email,
          },
        };
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        const token = await user.getIdToken();
        return {
          token,
          user: {
            uid: user.uid,
            email: user.email,
          },
        };
      }

      return rejectWithValue('User not authenticated');
    } catch (error) {
   
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await signOut(auth);
    return { message: 'User logged out successfully' };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, { rejectWithValue }) => {
  try {
    const user = auth.currentUser;
    if (!user) return rejectWithValue('No user is currently logged in');

    const token = await user.getIdToken();
    if (!token) return rejectWithValue('Unable to get user token');
    return {
      uid: user.uid,
      email: user.email,
      token,
    };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const operations = {
  register,
  logOut,
  logIn,
  refreshUser,
};

export default operations;
