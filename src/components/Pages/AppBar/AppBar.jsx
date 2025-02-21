import { FiFilm } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import Navigation from '../Navigation/Navigation';
import Container from '../../Container/Container';
import SearchBar from '../../SearchBar/SearchBar';
import HeaderBtns from '../Library/HeaderBtns';
import ThemeSwitcher from '../../Theme/ThemeSwitcher';

import s from './AppBar.module.css';
import { useTheme } from '../../Theme/ThemeProvider';
import { useEffect } from 'react';

const AppBar = () => {
  const location = useLocation();
  const { isDarkMode } = useTheme();
  const isLibraryPage = location.pathname.startsWith('/library');

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <header className={clsx(s.header, { [s.header_library]: isLibraryPage })}>
      <Container modClass={s.header__container}>
        <div className={s.header__wrapper}>
          <Link className={s.logo} aria-label="Filmoteka logo" to="/">
            <FiFilm className={s.header__icon} size={24} />
            <span className={s.logo__text}>Filmoteka</span>
          </Link>
          <Navigation />
        </div>
        {isLibraryPage ? <HeaderBtns /> : <SearchBar />}
        <ThemeSwitcher />
      </Container>
    </header>
  );
};

export default AppBar;
