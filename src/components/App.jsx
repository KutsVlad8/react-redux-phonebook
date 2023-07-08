import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home</div>} />
          <Route path="/registration" element={<div>Registration</div>} />
          <Route path="/logIn" element={<div>Log in</div>} />
          <Route path="/phonebook" element={<div>Phonebook</div>} />
          <Route path="/notes" element={<div>Notes</div>} />
        </Route>
      </Routes>
    </>
  );
};
