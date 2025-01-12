import { FiFilm } from 'react-icons/fi';
import Nav from './Nav/Nav';
import s from './Header.module.css';
import Container from '../Container/Container';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  return (
    <header className={s.header} id="home">
      <Container modClass={s.header__container}>
        <div className={s.header__wrapper}>
          <a className={s.logo} aria-label="Filmoteka logo">
            <FiFilm className={s.header__icon} size={24} />
            <span className={s.logo__text}>Filmoteka</span>
          </a>
          <Nav />
        </div>
        <SearchBar />
      </Container>
    </header>
  );
};

export default Header;
