import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';

import Home from '../pages/Home';
import Layout from './Pages/Layout/Layout';
import RestrictedRoute from './Auth/RestrictedRoute';
import PrivateRoute from './Auth/PrivateRoute';
import { auth } from '../firebase';
import NotFound from '../pages/NotFound';

const Library = lazy(() => import('../pages/Library'));
const Login = lazy(() => import('../pages/Login'));
const Registration = lazy(() => import('../pages/Registration'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(refreshUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/library"
            element={<PrivateRoute redirectTo="/login" component={<Library />} />}
          />
        </Route>
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/library" component={<Registration />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/library" component={<Login />} />}
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
