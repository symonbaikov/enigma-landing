import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ScrollProgress } from './scroll-anims.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <>
      <ScrollProgress/>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  );
}
