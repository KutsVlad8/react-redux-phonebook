import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import { Button, Img, Span } from './UserMenu.styled';
import avatar from './image/user.jpg';

const UserMenu = () => {
  const userName = useSelector(authSelectors.selectName);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <Img src={avatar} alt="user" width={32} />
      <Span>Welcome,{userName}!</Span>
      <Button type="button" onClick={handleLogOut}>
        Log out
      </Button>
    </>
  );
};

export default UserMenu;
