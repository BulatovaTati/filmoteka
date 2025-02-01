import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../../Pages/AppBar/AppBar';
import Loader from '../../Loader/Loader';

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AppBar />
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
