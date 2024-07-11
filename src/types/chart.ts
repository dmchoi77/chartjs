import type { ChartType, ChartData, ChartOptions } from 'chart.js';

export interface ChartProps {
  width?: string;
  height?: string;
  type: ChartType;
  data: ChartData;
  options?: ChartOptions;
}
