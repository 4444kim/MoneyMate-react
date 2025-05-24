import { Header } from '../../widgets/header/index';
import { Footer } from '../../widgets/footer';
import { Outlet } from 'react-router';

const RootLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default RootLayout;
