import { NavigationItem } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <NavigationItem to="/registration">Registration</NavigationItem>
      <NavigationItem to="/logIn">Log In</NavigationItem>
    </>
  );
};

export default AuthNav;
