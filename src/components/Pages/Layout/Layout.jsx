import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from '../../Pages/AppBar/AppBar';
import Loader from '../../Loader/Loader';
import Footer from '../../Footer/Footer';

import s from './Layout.module.css';

const Layout = () => {
  return (
    <div className={s.app_wrapper}>
      <Suspense fallback={<Loader />}>
        <AppBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;
