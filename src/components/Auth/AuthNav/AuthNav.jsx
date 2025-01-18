import { NavLink } from 'react-router-dom';
import buildLinkClass from '../../Pages/Navigation/buildLinkClass';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Log In
      </NavLink>
    </>
  );
};

export default AuthNav;
