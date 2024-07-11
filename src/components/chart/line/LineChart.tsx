import { ChartData, ChartOptions } from 'chart.js';
import { RenderChart } from '../RenderChart';

interface LineChartProps {
  width?: string;
  height?: string;
  data: ChartData;
  options?: ChartOptions;
}

export const LineChart = ({ data, height, width, options = {} }: LineChartProps) => (
  <RenderChart width={width} height={height} data={data} type='line' options={options} />
);
