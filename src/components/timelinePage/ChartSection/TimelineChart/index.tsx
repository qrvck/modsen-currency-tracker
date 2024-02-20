import 'chart.js/auto';
import 'chartjs-adapter-luxon';

import { Chart } from 'chart.js';
import { CandlestickController, CandlestickElement, OhlcController, OhlcElement } from 'chartjs-chart-financial';
import React from 'react';

import { Observer } from '@/utils/observer';

import { InnerWrapper, OuterWrapper } from './styled';
import { ChartProps, IChart } from './types';

const timelineChartObserver = new Observer();

Chart.register(CandlestickController, CandlestickElement, OhlcController, OhlcElement);

class TimelineChart extends React.Component<ChartProps> {
  chartRef: React.RefObject<HTMLCanvasElement> = React.createRef();
  chart: IChart | undefined;
  events: Observer = timelineChartObserver;

  componentDidMount() {
    this.displayChart();
  }

  componentDidUpdate(prevProps: ChartProps) {
    this.displayChart();

    const { timelineData: prevTimelineData } = prevProps;
    const { timelineData } = this.props;

    if (prevTimelineData.length === 0 && timelineData.length > 0) {
      this.events.notify('successfulCharting');
    }
  }

  displayChart = () => {
    if (this.chart) this.chart.destroy();

    const ctx = this.chartRef.current!.getContext('2d')!;
    const { timelineData } = this.props;

    this.chart = new Chart(ctx, {
      type: 'candlestick',
      data: {
        datasets: [
          {
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

      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  };

  render() {
    return (
      <OuterWrapper>
        <InnerWrapper>
          <canvas ref={this.chartRef} />
        </InnerWrapper>
      </OuterWrapper>
    );
  }
}

export { TimelineChart, timelineChartObserver };
