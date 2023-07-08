import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
