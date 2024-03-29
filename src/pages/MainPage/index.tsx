import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentRates } from '@/api/currentRates';
import { UpdateStatus } from '@/components/common/UpdateStatus';
import { QuotesSection } from '@/components/mainPage/QuotesSection';
import { IRootState } from '@/store';
import { setCurrentRates } from '@/store/slices/currentRatesSlice';
import { isRelevantData } from '@/utils';

import { IStatusState } from './types';

function getInitialStatusState(timestamp: number) {
  return isRelevantData(timestamp) ? 'updated' : 'updating';
}

function MainPage() {
  const { currencies, updateTimestamp } = useSelector((store: IRootState) => store.currentRates);
  const [status, setStatus] = useState<IStatusState>(() => getInitialStatusState(updateTimestamp));
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCurrentRates = async () => {
      try {
        const response = await getCurrentRates();
        dispatch(setCurrentRates(response.data));
        setStatus('updated');
      } catch {
        setStatus('error');
      }
    };

    if (!isRelevantData(updateTimestamp)) loadCurrentRates();
  }, [dispatch, updateTimestamp]);

  return (
    <>
      <UpdateStatus status={status} timestamp={updateTimestamp} />
      <QuotesSection status={status} currencies={currencies} />
    </>
  );
}

export { MainPage };
