import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import buildLinkClass from './buildLinkClass';
import s from './Navigation.module.css';
import UserMenu from '../../Auth/UserMenu/UserMenu';
import AuthNav from '../../Auth/AuthNav/AuthNav';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ul className={s.nav__list}>
      <li className={s.nav__item}>
        <NavLink to="/" className={buildLinkClass}>
          HOME
        </NavLink>
      </li>
      {isLoggedIn && (
        <li className={s.nav__item}>
          <NavLink to="/library" className={buildLinkClass}>
            MY LIBRARY
          </NavLink>
        </li>
      )}
      <li className={s.nav__item}>{isLoggedIn ? <UserMenu /> : <AuthNav />} </li>
    </ul>
  );
};

export default Navigation;
