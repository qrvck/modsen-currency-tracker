import 'chart.js/auto';
import 'chartjs-adapter-luxon';

import { Chart } from 'chart.js';
import { CandlestickController, CandlestickElement, OhlcController, OhlcElement } from 'chartjs-chart-financial';
import React from 'react';

Chart.register(CandlestickController, CandlestickElement, OhlcController, OhlcElement);

const dataToPlot = [
  { x: 1491004800000, o: 31.11, h: 33.04, l: 30.58, c: 32.03 },
  { x: 1491177600000, o: 31.23, h: 34.77, l: 30.35, c: 32.24 },
  { x: 1491264000000, o: 31.08, h: 34.68, l: 29.54, c: 32.48 },
  { x: 1491350400000, o: 31.68, h: 33.49, l: 28.72, c: 30.46 },
  { x: 1491436800000, o: 29.4, h: 31.83, l: 27.02, c: 29.76 },
];

type ChartProps = Record<string, never>;
type IChart = Chart<'candlestick', { x: number; o: number; h: number; l: number; c: number }[], string> | undefined;

class TimelineChart extends React.Component {
  chartRef: React.RefObject<HTMLCanvasElement>;
  chart: IChart;

  constructor(props: ChartProps) {
    super(props);
    this.chartRef = React.createRef();
    this.chart;
  }

  componentDidMount() {
    if (this.chart) this.chart.destroy();

    const ctx = this.chartRef.current!.getContext('2d')!;

    this.chart = new Chart(ctx, {
      type: 'candlestick',
      data: {
        datasets: [
          {
            label: 'CHRT - a random curve',
            data: dataToPlot,
            // @ts-expect-error expected error due to compatibility between chart.js and chartjs-chart-financial
            color: {
              up: 'rgba(80, 160, 115, 1)',
              down: 'rgba(215, 85, 65, 1)',
              unchanged: 'rgba(90, 90, 90, 1)',
            },
          },
        ],
      },
    });
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

export { TimelineChart };
