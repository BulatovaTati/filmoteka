import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { loginStart, loginSuccess, loginFailure, logout } from './redux/auth/slice';

const register = async (dispatch, email, password) => {
  dispatch(loginStart());

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token = await user.getIdToken();

    dispatch(loginSuccess({ user: { uid: user.uid, email: user.email }, token }));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

const login = async (dispatch, email, password) => {
  dispatch(loginStart());

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    const token = await user.getIdToken();

    dispatch(loginSuccess({ user: userData, token }));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

const logoutUser = async dispatch => {
  try {
    await signOut(auth);
    dispatch(logout());
  } catch (error) {
    console.error('Logout error:', error.message);
  }
};

export { login, logoutUser, register };
