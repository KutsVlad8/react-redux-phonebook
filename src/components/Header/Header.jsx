import { Head, Navigation, NavigationItem } from './Header.styled';

const Header = () => {
  return (
    <Head>
      <Navigation>
        <NavigationItem to="/">Home</NavigationItem>
        <NavigationItem to="/registration">Registration</NavigationItem>
        <NavigationItem to="/logIn">logIn</NavigationItem>
        <NavigationItem to="/phonebook">phonebook</NavigationItem>
        <NavigationItem to="/todoList">todoList</NavigationItem>
      </Navigation>
    </Head>
  );
};

export default Header;
