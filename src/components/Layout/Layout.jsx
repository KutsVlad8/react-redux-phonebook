import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
