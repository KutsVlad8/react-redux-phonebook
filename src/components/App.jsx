import { lazy } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import Layout from './Layout/Layout';
import authSelectors from 'redux/auth/authSelectors';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));
const Phonebook = lazy(() => import('pages/Phonebook/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/phonebook" component={Register} />
              }
            />

            <Route
              path="/logIn"
              element={
                <RestrictedRoute redirectTo="/phonebook" component={LogIn} />
              }
            />

            <Route
              path="/phonebook"
              element={
                <PrivateRoute redirectTo="/logIn" component={Phonebook} />
              }
            />
          </Route>
        </Routes>
      </>
    )
  );
};
