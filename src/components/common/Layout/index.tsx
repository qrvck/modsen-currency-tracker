import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { Intro } from '../Intro';
import { UpdateStatus } from '../UpdateStatus';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <UpdateStatus />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { Layout };
