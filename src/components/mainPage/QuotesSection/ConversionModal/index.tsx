import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { convertCurrency } from '@/api/convertCurrency';
import { Modal } from '@/components/common/Modal';
import { ALL_CURRENCY_IDS } from '@/constants/currency';
import { IRootState } from '@/store';
import { setConvertedCurrency } from '@/store/slices/convertedCurrenciesSlice';
import { isRelevantData } from '@/utils';

import {
  CONVERTER_TEXT,
  CURRENCY_SOLD_TITLE_TEXT,
  DECIMAL_NUMBER,
  ERROR_TEXT,
  LOADING_TEXT,
  OUTPUT_TITLE_TEXT,
  SUBTITLE_PART_1,
  SUBTITLE_PART_2,
} from './constants';
import {
  ConverterText,
  ConverterWrapper,
  CurrencySoldInput,
  Select,
  Subtitle,
  Title,
  ValueDataWrapper,
  Wrapper,
} from './styled';
import { IConversionModal } from './types';

function ConversionModal({ currencyID, onClose }: IConversionModal) {
  const availableCurrencyForConversion = useMemo(
    () => ALL_CURRENCY_IDS.filter((currency) => currency !== currencyID),
    [currencyID]
  );

  const convertedCurrenciesStore = useSelector((store: IRootState) => store.convertedCurrencies);
  const [selectValue, setSelectValue] = useState(availableCurrencyForConversion[0]);
  const [rate, setRate] = useState<number | null>(null);
  const [amountOfCurrencySold, setAmountOfCurrencySold] = useState<number>(1);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const convertedCurrency = convertedCurrenciesStore[`${currencyID}-${selectValue}`];

    if (convertedCurrency && isRelevantData(convertedCurrency.updateTimestamp)) {
      setRate(convertedCurrency.rate);
      setIsError(false);
    } else {
      const loadConvertCurrency = async () => {
        try {
          setRate(null);
          setIsError(false);
          const response = await convertCurrency(currencyID, selectValue);
          dispatch(setConvertedCurrency(response.data));
          setRate(response.data.rate);
        } catch {
          setIsError(true);
        }
      };

      loadConvertCurrency();
    }
  }, [convertedCurrenciesStore, currencyID, dispatch, selectValue]);

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  const handleChangeAmountOfCurrencySold = (e: ChangeEvent<HTMLInputElement>) => {
    setAmountOfCurrencySold(+e.target.value);
  };

  const getOutputValue = () => {
    if (isError) return ERROR_TEXT;
    if (!rate && !isError) return LOADING_TEXT;
    if (rate) return (amountOfCurrencySold * rate).toFixed(DECIMAL_NUMBER);
  };

  return (
    <Modal onClose={onClose}>
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

        <ValueDataWrapper>
          <p>{CURRENCY_SOLD_TITLE_TEXT}</p>
          <CurrencySoldInput type="number" value={amountOfCurrencySold} onChange={handleChangeAmountOfCurrencySold} />
        </ValueDataWrapper>

        <ValueDataWrapper>
          <p>{OUTPUT_TITLE_TEXT}</p>
          <output>{getOutputValue()}</output>
        </ValueDataWrapper>
      </Wrapper>
    </Modal>
  );
}

export { ConversionModal };
