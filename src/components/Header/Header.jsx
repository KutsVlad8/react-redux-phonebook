import { Head, Navigation, NavigationItem } from './Header.styled';

const Header = () => {
  return (
    <Head>
      <Navigation>
        <div>
          <NavigationItem to="/">Home</NavigationItem>
          <NavigationItem to="/phonebook">Phonebook</NavigationItem>
          <NavigationItem to="/notes">Notes</NavigationItem>
        </div>

        <div>
          <NavigationItem to="/registration">Registration</NavigationItem>
          <NavigationItem to="/logIn">Log In</NavigationItem>
        </div>
      </Navigation>
    </Head>
  );
};

export default Header;
