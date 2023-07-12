import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Phonebook from 'pages/Phonebook/Phonebook';
import LogIn from 'pages/LogIn/LogIn';
import Register from 'pages/Register/Register';
import Home from 'pages/Home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperations';

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
          <Route path="/registration" element={<Register />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/phonebook" element={<Phonebook />} />
        </Route>
      </Routes>
    </>
  );
};
