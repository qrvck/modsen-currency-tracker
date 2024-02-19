import { PayloadAction } from '@reduxjs/toolkit';

import { IResponseData } from '@/api/bankBranches/types';

interface IInitialState {
  bankBranches: IResponseData;
  updateTimestamp: number;
}

type ISetBankBranchesAction = PayloadAction<IResponseData>;

export type { IInitialState, ISetBankBranchesAction };
