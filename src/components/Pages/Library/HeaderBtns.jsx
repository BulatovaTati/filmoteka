import clsx from 'clsx';
import s from './HeaderBtns.module.css';
import { NavLink } from 'react-router-dom';

const HeaderBtns = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.button, isActive && s.button_active);
  };

  return (
    <div className={s.header__buttons}>
      <NavLink to="/library/watched" className={buildLinkClass}>
        Watched
      </NavLink>
      <NavLink to="/library/queue" className={buildLinkClass}>
        queue
      </NavLink>
    </div>
  );
};

export default HeaderBtns;
