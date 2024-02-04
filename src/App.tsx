import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '@/components/common/Layout';
import { RoutPathEnum } from '@/constants/routing';
import { BankCardPage, ContactsPage, MainPage, TimelinePage } from '@/pages';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path={RoutPathEnum.MAIN_PAGE} element={<MainPage />} />
        <Route path={RoutPathEnum.TIMELINE_PAGE} element={<TimelinePage />} />
        <Route path={RoutPathEnum.BANK_CARD_PAGE} element={<BankCardPage />} />
        <Route path={RoutPathEnum.CONTACTS_PAGE} element={<ContactsPage />} />

        <Route path={RoutPathEnum.OTHER} element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
