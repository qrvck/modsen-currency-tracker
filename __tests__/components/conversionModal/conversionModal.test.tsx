import 'jest-styled-components';
import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { ConversionModal } from '../../../src/components/mainPage/QuotesSection/ConversionModal';
import {
  DECIMAL_NUMBER,
  SUBTITLE_PART_1,
  SUBTITLE_PART_2,
} from '../../../src/components/mainPage/QuotesSection/ConversionModal/constants';
import { ThemeProvider } from '../../../src/themes/ThemeProvider';
import {
  CURRENCY_ID_PROPS,
  CURRENCY_SOLD_INPUT_CHANGE_VALUE,
  CURRENCY_SOLD_INPUT_DATA_TEST_ID,
  CURRENCY_SOLD_OUTPUT_DATA_TEST_ID,
  MOCK_CONVERSION_KEY_STATE,
  MOCK_FROM_CURRENCY_PARAM_STATE,
  MOCK_RATE_PARAM_STATE,
  MOCK_TO_CURRENCY_PARAM_STATE,
} from './conversionModal.test.mock';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => ({
    isDark: true,
  })),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => ({
    [MOCK_CONVERSION_KEY_STATE]: {
      fromCurrency: MOCK_FROM_CURRENCY_PARAM_STATE,
      rate: MOCK_RATE_PARAM_STATE,
      toCurrency: MOCK_TO_CURRENCY_PARAM_STATE,
      updateTimestamp: new Date().getTime(),
    },
  })),

  useDispatch: jest.fn(() => {}),
}));

window.scrollTo = jest.fn();

describe('<ConversionModal />', () => {
  const TestConversionModal = (
    <ThemeProvider>
      <ConversionModal currencyID={CURRENCY_ID_PROPS} onClose={() => {}} />
    </ThemeProvider>
  );

  it('should be rendered through the ReactDOM.createPortal with the correct data', () => {
    const container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);

    const { getByText } = render(TestConversionModal);

    expect(getByText(CURRENCY_ID_PROPS)).toBeInTheDocument();
    expect(getByText(`${SUBTITLE_PART_1}${CURRENCY_ID_PROPS}${SUBTITLE_PART_2}`)).toBeInTheDocument();
  });

  it('should correctly convert currency when the amount of currency sold changes', () => {
    const container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);

    const { getByTestId } = render(TestConversionModal);

    const currencySoldInput = getByTestId(CURRENCY_SOLD_INPUT_DATA_TEST_ID);

    fireEvent.change(currencySoldInput, { target: { value: CURRENCY_SOLD_INPUT_CHANGE_VALUE } });

    expect(getByTestId(CURRENCY_SOLD_OUTPUT_DATA_TEST_ID)).toHaveValue(
      (MOCK_RATE_PARAM_STATE * CURRENCY_SOLD_INPUT_CHANGE_VALUE).toFixed(DECIMAL_NUMBER)
    );
  });
});
