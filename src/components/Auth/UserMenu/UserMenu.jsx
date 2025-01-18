import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../firebaseAuth';

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button type="submit" onClick={() => logoutUser(dispatch)}>
        Log out
      </button>
    </>
  );
};

export default UserMenu;
