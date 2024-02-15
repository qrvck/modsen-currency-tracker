import 'chart.js/auto';
import 'chartjs-adapter-luxon';

import { Chart } from 'chart.js';
import { CandlestickController, CandlestickElement, OhlcController, OhlcElement } from 'chartjs-chart-financial';
import React from 'react';

import { Observer } from '@/utils';

import { ChartProps, IChart } from './types';

const timelineChartObserver = new Observer();

Chart.register(CandlestickController, CandlestickElement, OhlcController, OhlcElement);

class TimelineChart extends React.Component<ChartProps> {
  chartRef: React.RefObject<HTMLCanvasElement>;
  chart: IChart;
  events: Observer;

  constructor(props: ChartProps) {
    super(props);
    this.chartRef = React.createRef();
    this.chart;
    this.events = timelineChartObserver;

    this.displayChart = this.displayChart.bind(this);
  }

  componentDidMount() {
    this.displayChart();
  }

  componentDidUpdate() {
    this.displayChart();
  }

  displayChart() {
    if (this.chart) this.chart.destroy();

    const ctx = this.chartRef.current!.getContext('2d')!;
    const { timelineData } = this.props;

    this.chart = new Chart(ctx, {
      type: 'candlestick',
      data: {
        datasets: [
          {
            label: '',
            data: timelineData,
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

    if (timelineData.length) {
      this.events.notify('successfulCharting');
    }
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

export { TimelineChart, timelineChartObserver };
