import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Phonebook from 'pages/Phonebook/Phonebook';
import LogIn from 'pages/LogIn/LogIn';
import Register from 'pages/Register/Register';
import Home from 'pages/Home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/registration" element={<Register />} /> */}
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/phonebook"
                component={<Register />}
              />
            }
          />
          {/* <Route path="/logIn" element={<LogIn />} /> */}

          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/phonebook" component={<LogIn />} />
            }
          />
          {/* <Route path="/phonebook" element={<Phonebook />} /> */}

          <Route
            path="/phonebook"
            element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
