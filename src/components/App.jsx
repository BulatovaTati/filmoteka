import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { selectIsFetching } from '../redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';

import Loader from './Loader/Loader';
import Home from '../pages/Home';
import Layout from './Pages/Layout/Layout';
import RestrictedRoute from './Auth/RestrictedRoute';
import PrivateRoute from './Auth/PrivateRoute';
import { auth } from '../firebase';

const Library = lazy(() => import('../pages/Library'));
const Login = lazy(() => import('../pages/Login'));
const Registration = lazy(() => import('../pages/Registration'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetching);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(refreshUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (isFetchingCurrentUser) return <Loader />;

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={<RestrictedRoute redirectTo="/library" component={<Registration />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/library" component={<Login />} />}
          />
          <Route
            path="/library"
            element={<PrivateRoute redirectTo="/login" component={<Library />} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
