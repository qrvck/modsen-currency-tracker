import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IRootState } from '@/store';
import { setIsDark } from '@/store/slices/themeProviderSlice';

import { Checkbox, Label, Slider } from './styled';

function Switcher() {
  const { isDark } = useSelector((store: IRootState) => store.themeProvider);
  const dispatch = useDispatch();

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    dispatch(setIsDark(isChecked));
  };

  return (
    <Label data-testid="theme-switcher">
      <Checkbox defaultChecked={isDark} onChange={handleChangeCheckbox} />
      <Slider />
    </Label>
  );
}

export { Switcher };
