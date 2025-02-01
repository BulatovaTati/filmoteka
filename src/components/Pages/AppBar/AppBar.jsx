import { useSelector } from 'react-redux';
import { FiFilm } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import UserMenu from '../../Auth/UserMenu/UserMenu';
import AuthNav from '../../Auth/AuthNav/AuthNav';
import Container from '../../Container/Container';
import SearchBar from '../../SearchBar/SearchBar';

import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import s from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header} id="home">
      <Container modClass={s.header__container}>
        <div className={s.header__wrapper}>
          <Link className={s.logo} aria-label="Filmoteka logo" to="/">
            <FiFilm className={s.header__icon} size={24} />
            <span className={s.logo__text}>Filmoteka</span>
          </Link>
          <Navigation>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Navigation>
        </div>
        <SearchBar />
      </Container>
    </header>
  );
};

export default AppBar;
