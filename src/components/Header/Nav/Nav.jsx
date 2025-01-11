import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => {
  const addActive = ({ isActive }) => (isActive ? s.active : s.nav__link);

  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <NavLink to="/logOut" className={`${s.header__link} ${s.nav__link}`}>
            LOG OUT
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/logIn" className={`${s.header__link} ${s.nav__link}`}>
            LOG IN
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/" className={addActive}>
            HOME
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/library" className={addActive}>
            MY LIBRARY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
