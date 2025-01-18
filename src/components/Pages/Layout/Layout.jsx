import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from '../../Pages/AppBar/AppBar';
import Loader from '../../Loader/Loader';

const Layout = () => {
  return (
    <>
      <Toaster />
      <Suspense fallback={<Loader />}>
        <AppBar />
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
