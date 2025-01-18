import clsx from 'clsx';
import s from '../../Pages/Navigation/Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.nav__link, isActive && s.active);
};

export default buildLinkClass;
