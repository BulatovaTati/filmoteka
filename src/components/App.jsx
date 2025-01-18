import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import Home from '../pages/Home';
import { selectIsFetching } from '../redux/auth/selectors';

import { useDispatch, useSelector } from 'react-redux';
import Layout from './Pages/Layout/Layout';
import RestrictedRoute from './Auth/RestrictedRoute';
import PrivateRoute from './Auth/PrivateRoute';
import { refreshUserToken } from '../redux/auth/operations';

const Library = lazy(() => import('../pages/Library'));
const Login = lazy(() => import('../pages/Login'));
const Registration = lazy(() => import('../pages/Registration'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetching);
  console.log('isFetchingCurrentUser: ', isFetchingCurrentUser);

  useEffect(() => {
    dispatch(refreshUserToken());
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
