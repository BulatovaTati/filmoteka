import { useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import buildLinkClass from './buildLinkClass';
import s from './Navigation.module.css';

const Navigation = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) <Navigate to="/" />;

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
      <li className={s.nav__item}>{children}</li>
    </ul>
  );
};

export default Navigation;
