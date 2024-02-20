import 'jest-styled-components';
import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Switcher } from '../../../src/components/common/Header/Switcher';
import { ThemeProvider } from '../../../src/themes/ThemeProvider';
import { SWITCHER_DATA_TEST_ID } from './switcher.test.mock';

const mockUpdateIsDarkFn = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => ({
    isDark: true,
  })),

  useDispatch: () => mockUpdateIsDarkFn,
}));

describe('<Switcher />', () => {
  const TestSwitcher = (
    <ThemeProvider>
      <Switcher />
    </ThemeProvider>
  );

  it('should cause the theme to switch when the switcher is clicked', async () => {
    const { getByTestId } = render(TestSwitcher);

    fireEvent.click(getByTestId(SWITCHER_DATA_TEST_ID));

    expect(mockUpdateIsDarkFn).toHaveBeenCalledTimes(1);
  });

  it('should switcher checked when dark theme is active', async () => {
    const { container } = render(TestSwitcher);
    const checkbox = container.querySelector('[type="checkbox"]');

    expect(checkbox).toBeChecked();
  });
});
