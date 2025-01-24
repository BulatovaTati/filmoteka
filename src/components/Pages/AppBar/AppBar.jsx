import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../../Auth/UserMenu/UserMenu';
import AuthNav from '../../Auth/AuthNav/AuthNav';
import s from './AppBar.module.css';

import { FiFilm } from 'react-icons/fi';
import Container from '../../Container/Container';
import SearchBar from '../../SearchBar/SearchBar';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header} id="home">
      <Container modClass={s.header__container}>
        <div className={s.header__wrapper}>
          <a className={s.logo} aria-label="Filmoteka logo">
            <FiFilm className={s.header__icon} size={24} />
            <span className={s.logo__text}>Filmoteka</span>
          </a>
          <Navigation>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Navigation>
        </div>
        <SearchBar />
      </Container>
    </header>
  );
};

export default AppBar;
