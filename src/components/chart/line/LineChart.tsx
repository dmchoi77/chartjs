import { RenderChart } from '../RenderChart';
import { ChartProps } from '../../../types/chart';

export const LineChart = (props: ChartProps) => <RenderChart {...props} type='line' />;
