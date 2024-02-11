import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { convertCurrency } from '@/api/convertCurrency';
import { Modal } from '@/components/common/Modal';
import { ALL_CURRENCY_IDS } from '@/constants/currency';
import { IRootState } from '@/store';
import { setConvertibleCurrencies } from '@/store/slices/convertCurrencySlice';
import { isRelevantData } from '@/utils';

import { CONVERTER_TEXT, DECIMAL_NUMBER, OUTPUT_TEXT, SUBTITLE_PART_1, SUBTITLE_PART_2 } from './constants';
import { ConverterText, ConverterWrapper, Select, Subtitle, Title, Wrapper } from './styled';
import { IConversionModal } from './types';

function ConversionModal({ currencyID, onClose }: IConversionModal) {
  const availableCurrencyForConversion = useMemo(
    () => ALL_CURRENCY_IDS.filter((currency) => currency !== currencyID),
    [currencyID]
  );

  const convertedCurrency = useSelector((store: IRootState) => store.convertCurrency);
  const [selectValue, setSelectValue] = useState(availableCurrencyForConversion[0]);
  const [convertedRate, setConvertedRate] = useState<number | null>(null);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const convertedValue = convertedCurrency[`${currencyID}-${selectValue}`];

    if (convertedValue && isRelevantData(convertedValue.updateTimestamp)) {
      setConvertedRate(convertedValue.rate);
      setIsError(false);
    } else {
      const loadConvertCurrency = async () => {
        try {
          setConvertedRate(null);
          setIsError(false);
          const response = await convertCurrency(currencyID, selectValue);
          dispatch(setConvertibleCurrencies(response.data));
          setConvertedRate(response.data.rate);
        } catch {
          setIsError(true);
        }
      };

      loadConvertCurrency();
    }
  }, [currencyID, selectValue, dispatch, convertedCurrency]);

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  return (
    <Modal onClose={onClose} isOpen={Boolean(currencyID)}>
      <Wrapper>
        <Title>{currencyID}</Title>
        <Subtitle>
          {SUBTITLE_PART_1}
          {currencyID}
          {SUBTITLE_PART_2}
        </Subtitle>

        <ConverterWrapper>
          <ConverterText>{CONVERTER_TEXT}</ConverterText>
          <Select value={selectValue} onChange={handleChangeSelect}>
            {availableCurrencyForConversion.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </Select>
        </ConverterWrapper>

        <p>
          {OUTPUT_TEXT}
          {convertedRate?.toFixed(DECIMAL_NUMBER)}
          {!convertedRate && !isError && 'loading...'}
          {isError && 'error'}
        </p>
      </Wrapper>
    </Modal>
  );
}

export { ConversionModal };
