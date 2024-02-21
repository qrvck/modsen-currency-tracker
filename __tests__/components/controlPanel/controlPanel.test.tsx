import 'jest-styled-components';
import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { ControlPanel } from '../../../src/components/timelinePage/ControlPanelSection';
import { ThemeProvider } from '../../../src/themes/ThemeProvider';
import {
  APPLY_BUTTON_DATA_TEST_ID,
  APPLY_BUTTON_TEXT,
  CURRENCY_SELECT_DATA_TEST_ID,
  CURRENCY_SELECT_MOCK_VALUE,
  DATE_INPUT_DATA_TEST_ID,
  DATE_INPUT_MOCK_VALUE,
} from './controlPanel.test.mock';

const mock_ReactCreateElement = React.createElement;

const mockGetCurrencyTimeline = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => ({
    isDark: true,
  })),

  connect: jest.fn((mapStateToProps) => {
    const state = { currencyTimelines: { selectedDate: '', selectedCurrency: '', currencies: {} } };
    const mapDispatchToProps = {
      setSelectedCurrency: () => {},
      setSelectedDate: () => {},
      setLoadingStatusCurrencyTimeline: () => {},
    };

    const fromConnectProps = mapStateToProps(state);

    return jest.fn((Component) => {
      function Wrapper(props) {
        const finalProps = { ...props, ...fromConnectProps, ...mapDispatchToProps };
        return mock_ReactCreateElement(Component, finalProps);
      }
      return Wrapper;
    });
  }),
}));

jest.mock('@/api/currencyTimeline', () => ({
  getCurrencyTimeline: () => mockGetCurrencyTimeline(),
}));

describe('<ControlPanel />', () => {
  const TestControlPanel = (
    <ThemeProvider>
      <ControlPanel />
    </ThemeProvider>
  );

  it('should the apply button be disabled until the correct data is entered', () => {
    const { queryByText } = render(TestControlPanel);

    expect(queryByText(APPLY_BUTTON_TEXT)).toBeDisabled();
  });

  it('the apply button should be unlocked when correct data is entered', () => {
    const { getByTestId } = render(TestControlPanel);

    const dateInput = getByTestId(DATE_INPUT_DATA_TEST_ID);
    const currencySelect = getByTestId(CURRENCY_SELECT_DATA_TEST_ID);
    const applyButton = getByTestId(APPLY_BUTTON_DATA_TEST_ID);

    fireEvent.change(dateInput, { target: { value: DATE_INPUT_MOCK_VALUE } });
    fireEvent.change(currencySelect, { target: { value: CURRENCY_SELECT_MOCK_VALUE } });

    expect(applyButton).not.toBeDisabled();
  });

  it('should load the data for the chart when the correct data is entered and the apply button is clicked', () => {
    const { getByTestId } = render(TestControlPanel);

    const dateInput = getByTestId(DATE_INPUT_DATA_TEST_ID);
    const currencySelect = getByTestId(CURRENCY_SELECT_DATA_TEST_ID);
    const applyButton = getByTestId(APPLY_BUTTON_DATA_TEST_ID);

    fireEvent.change(dateInput, { target: { value: DATE_INPUT_MOCK_VALUE } });
    fireEvent.change(currencySelect, { target: { value: CURRENCY_SELECT_MOCK_VALUE } });
    fireEvent.click(applyButton);

    expect(mockGetCurrencyTimeline).toHaveBeenCalledTimes(1);
  });
});
