import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentRates } from '@/api/currentRates';
import { UpdateStatus } from '@/components/common/UpdateStatus';
import { QuotesSection } from '@/components/mainPage/QuotesSection';
import { IRootState } from '@/store';
import { setCurrentRates } from '@/store/slices/currentRatesSlice';
import { getInitialUpdateTimeStatusState, getUpdateTime, isRelevantData } from '@/utils';

function MainPage() {
  const { rates, updateTimestamp } = useSelector((store: IRootState) => store.currentRates);
  const [status, setStatus] = useState<'updated' | 'updating' | 'error'>(
    getInitialUpdateTimeStatusState(updateTimestamp)
  );
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
      <UpdateStatus status={status} time={getUpdateTime(updateTimestamp)} />
      <QuotesSection status={status} rates={rates} />
    </>
  );
}

export { MainPage };
