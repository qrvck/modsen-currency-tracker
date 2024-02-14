interface ICurrencyTimeline {
  currency: string;
  data: ICurrencyTimelineData[];
}

interface ICurrencyTimelineData {
  timestamp: number;
  price_open: number;
  price_high: number;
  price_low: number;
  price_close: number;
  volume_traded: number;
  trades_count: number;
}

export type { ICurrencyTimeline, ICurrencyTimelineData };
