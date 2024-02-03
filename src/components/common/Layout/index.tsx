import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { Intro } from '../Intro';
import { UpdateTime } from '../UpdateTime';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <UpdateTime />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { Layout };
