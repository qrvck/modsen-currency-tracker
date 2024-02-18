import { PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  isDark: boolean;
}

type ISetIsDarkAction = PayloadAction<boolean>;

export type { IInitialState, ISetIsDarkAction };
