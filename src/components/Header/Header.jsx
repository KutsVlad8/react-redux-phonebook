import { Head, Navigation, NavigationItem } from './Header.styled';

const Header = () => {
  return (
    <Head>
      <Navigation>
        <NavigationItem to="/">Home</NavigationItem>
        <NavigationItem to="/registration">Registration</NavigationItem>
        <NavigationItem to="/logIn">Log In</NavigationItem>
        <NavigationItem to="/phonebook">Phonebook</NavigationItem>
        <NavigationItem to="/notes">Notes</NavigationItem>
      </Navigation>
    </Head>
  );
};

export default Header;
