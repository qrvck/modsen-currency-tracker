import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBankBranches } from '@/api/bankBranches';
import { MapSection } from '@/components/bankCardPage/MapSection';
import { UpdateStatus } from '@/components/common/UpdateStatus';
import { IRootState } from '@/store';
import { setBankBranches } from '@/store/slices/bankBranchesSlice';

import { IStatusState } from './types';

function BankCardPage() {
  const { bankBranches, updateTimestamp } = useSelector((store: IRootState) => store.bankBranches);
  const dispatch = useDispatch();

  const [status, setStatus] = useState<IStatusState>(bankBranches.length ? 'updated' : 'updating');

  useEffect(() => {
    const loadBankBranches = async () => {
      try {
        const response = await getBankBranches();
        setStatus('updated');
        dispatch(setBankBranches(response.data));
      } catch {
        setStatus('error');
      }
    };

    if (!bankBranches.length) loadBankBranches();
  }, [bankBranches.length, dispatch]);

  return (
    <>
      <UpdateStatus status={status} timestamp={updateTimestamp} />
      <MapSection bankBranches={bankBranches} />
    </>
  );
}

export { BankCardPage };
