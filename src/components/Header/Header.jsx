import Nav from './Nav/Nav';
import s from './Header.module.css';
import Container from '../Container/Container';

const Header = () => {
  return (
    <header className={s.header} id="home">
      <Container modClass={s.header__container}>
        <div className={s.header__wrapper}>
          <a className={s.logo} aria-label="Filmoteka logo">
            <svg width="24" height="24" className={s.header__icon}>
              <use href="../../icons/sprite.svg#icon-logo"></use>
            </svg>
            <span className={s.logo__text}>Filmoteka</span>
          </a>
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
