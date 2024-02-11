import React, { ChangeEvent, useMemo, useState } from 'react';

import { Modal } from '@/components/common/Modal';
import { ALL_CURRENCY_IDS } from '@/constants/currency';

import { CONVERTER_TEXT, OUTPUT_TEXT, SUBTITLE_PART_1, SUBTITLE_PART_2 } from './constants';
import { ConverterText, ConverterWrapper, Select, Subtitle, Title, Wrapper } from './styled';
import { IConversionModal } from './types';

function ConversionModal({ currencyID, onClose }: IConversionModal) {
  const availableCurrencyForConversion = useMemo(
    () => ALL_CURRENCY_IDS.filter((currency) => currency !== currencyID),
    [currencyID]
  );

  const [selectValue, setSelectValue] = useState(availableCurrencyForConversion[0]);

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
          {1233456}
        </p>
      </Wrapper>
    </Modal>
  );
}

export { ConversionModal };
