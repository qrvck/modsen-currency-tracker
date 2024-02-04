import React, { ChangeEvent } from 'react';

import { useTheme } from '@/themes/ThemeProvider';

import { Checkbox, Label, Slider } from './styled';

function Switcher() {
  const { isDark, updateIsDark } = useTheme();

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    updateIsDark(isChecked);
  };

  return (
    <Label>
      <Checkbox defaultChecked={isDark} onChange={handleChangeCheckbox} />
      <Slider />
    </Label>
  );
}

export { Switcher };
