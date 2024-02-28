import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '@/components/common/Layout';
import {
  BANK_CARD_PAGE_PATH,
  CONTACTS_PAGE_PATH,
  MAIN_PAGE_PATH,
  OTHER_PAGES_PATH,
  TIMELINE_PAGE_PATH,
} from '@/constants/routing';
import { BankCardPage, ContactsPage, MainPage, TimelinePage } from '@/pages';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path={MAIN_PAGE_PATH} element={<MainPage />} />
        <Route path={TIMELINE_PAGE_PATH} element={<TimelinePage />} />
        <Route path={BANK_CARD_PAGE_PATH} element={<BankCardPage />} />
        <Route path={CONTACTS_PAGE_PATH} element={<ContactsPage />} />

        <Route path={OTHER_PAGES_PATH} element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
