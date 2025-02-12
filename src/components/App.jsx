import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from './Pages/Layout/Layout';
import NotFound from '../pages/NotFound';

import RestrictedRoute from './Auth/RestrictedRoute';
import PrivateRoute from './Auth/PrivateRoute';

import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { auth } from '../firebase';
import Loader from './Loader/Loader';

const Library = lazy(() => import('../pages/Library'));
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Registration = lazy(() => import('../pages/Registration'));
const Watched = lazy(() => import('../pages/Watched'));
const Queue = lazy(() => import('../pages/Queue'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(refreshUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/library"
            element={<PrivateRoute redirectTo="/login" component={<Library />} />}
          >
            <Route
              path="watched"
              element={<PrivateRoute redirectTo="/login" component={<Watched />} />}
            />
            <Route
              path="queue"
              element={<PrivateRoute redirectTo="/login" component={<Queue />} />}
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

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
