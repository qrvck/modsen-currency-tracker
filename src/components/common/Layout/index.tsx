import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { Intro } from '../Intro';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { Layout };
