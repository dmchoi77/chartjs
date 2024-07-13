import type { ChartType, ChartData, ChartOptions } from 'chart.js';

export interface ChartProps {
  width?: number;
  height?: number;
  type: ChartType;
  data: ChartData;
  options?: ChartOptions;
}
