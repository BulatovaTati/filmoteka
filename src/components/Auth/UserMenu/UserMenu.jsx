import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button type="submit" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </>
  );
};

export default UserMenu;
