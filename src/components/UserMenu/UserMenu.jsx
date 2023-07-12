import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';

const UserMenu = () => {
  const userName = useSelector(authSelectors.selectName);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <span>добро пожаловать,{userName}!</span>
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </>
  );
};

export default UserMenu;
