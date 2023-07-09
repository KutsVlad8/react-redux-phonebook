import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Phonebook from 'pages/Phonebook/Phonebook';
import Notes from 'pages/Notes/Notes';
import LogIn from 'pages/LogIn/LogIn';
import Registration from 'pages/Registration/Registration';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home</div>} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/phonebook" element={<Phonebook />} />
          <Route path="/notes" element={<Notes />} />
        </Route>
      </Routes>
    </>
  );
};
