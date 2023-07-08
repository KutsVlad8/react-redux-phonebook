import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home</div>} />
          <Route path="/registration" element={<div>registration</div>} />
          <Route path="/logIn" element={<div>Log in</div>} />
          <Route path="/phonebook" element={<div>phonebook</div>} />
          <Route path="/todoList" element={<div>todoList</div>} />
        </Route>
      </Routes>
    </>
  );
};
