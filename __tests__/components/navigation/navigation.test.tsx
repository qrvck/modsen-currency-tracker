import 'jest-styled-components';
import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navigation } from '../../../src/components/common/Header/Navigation';
import { BANK_CARD_LINK_TEXT } from '../../../src/components/common/Header/Navigation/constants';
import { BANK_CARD_PAGE_PATH } from '../../../src/constants/routing';
import { ThemeProvider } from '../../../src/themes/ThemeProvider';
import { CLASSNAME_ACTIVE_LINK } from './search.test.mock';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => ({
    isDark: true,
  })),
}));

describe('<Navigation />', () => {
  const TestNavigation = (
    <BrowserRouter>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </BrowserRouter>
  );

  it("should have an 'active' class after the link is clicked", () => {
    const { getByText } = render(TestNavigation);

    fireEvent.click(getByText(BANK_CARD_LINK_TEXT));

    expect(getByText(BANK_CARD_LINK_TEXT)).toHaveClass(CLASSNAME_ACTIVE_LINK);
  });

  it('should redirect to the page with the corresponding url when clicking on the link', () => {
    const { getByText } = render(TestNavigation);

    fireEvent.click(getByText(BANK_CARD_LINK_TEXT));

    expect(location.pathname).toBe(`/${BANK_CARD_PAGE_PATH}`);
  });
});
