import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import Home from '../pages/Home';
import Header from './Header/Header';

const Library = lazy(() => import('../pages/Library'));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
