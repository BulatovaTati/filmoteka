import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button type="submit" className={s.logOut} onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </>
  );
};

export default UserMenu;
