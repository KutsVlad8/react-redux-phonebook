import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigate to="/logIn" />}
    </Route>
  );
}
