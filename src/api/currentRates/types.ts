interface IResponseData {
  asset_id_base: string;
  rates: IRate[];
}

interface IRate {
  time: string;
  asset_id_quote: string;
  rate: number;
}

export type { IResponseData };
