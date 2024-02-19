import React from 'react';

import { MapSection } from '@/components/bankCardPage/MapSection';
import { UpdateStatus } from '@/components/common/UpdateStatus';

function BankCardPage() {
  return (
    <>
      <p>BankCardPage</p>
      <UpdateStatus status={'updated'} />
      <MapSection />
    </>
  );
}

export { BankCardPage };
