import AuthNav from 'components/AuthNav/AuthNav';
import { Head, Navigation, NavigationItem } from './Header.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <Head>
      <Navigation>
        <div>
          <NavigationItem to="/">Home</NavigationItem>
          {isLoggedIn && (
            <NavigationItem to="/phonebook">Phonebook</NavigationItem>
          )}
        </div>
      </Navigation>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Head>
  );
};

export default Header;
