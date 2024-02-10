import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentRates } from '@/api/currentRates';
import { IRootState } from '@/store';
import { setCurrentRates } from '@/store/slices/currentRatesSlice';

function MainPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isError, setIsError] = useState(false);
  const { rates, updateTimestamp } = useSelector((store: IRootState) => store.currentRates);
  const dispatch = useDispatch();

  const isLast6HoursData = useCallback(() => {
    const millisecondsIn6Hours = 3600000;
    return Date.now() - updateTimestamp < millisecondsIn6Hours;
  }, [updateTimestamp]);

  useEffect(() => {
    const loadCurrentRates = async () => {
      try {
        const response = await getCurrentRates();
        dispatch(setCurrentRates(response.data));
      } catch {
        setIsError(true);
      }
    };

    if (!isLast6HoursData()) loadCurrentRates();
  }, [dispatch, isLast6HoursData]);

  return (
    <>
      <p>MainPage</p>
      {isLast6HoursData() && <p>{rates[0].asset_id_quote}</p>}
    </>
  );
}

export { MainPage };
