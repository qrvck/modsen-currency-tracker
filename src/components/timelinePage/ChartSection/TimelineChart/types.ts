import { Chart } from 'chart.js';

type IChart = Chart<'candlestick', IConvertedTimelineData[], string> | undefined;

interface IConvertedTimelineData {
  x: number;
  o: number;
  h: number;
  l: number;
  c: number;
}

interface ChartProps {
  timelineData: IConvertedTimelineData[];
}

export type { ChartProps, IChart, IConvertedTimelineData };
