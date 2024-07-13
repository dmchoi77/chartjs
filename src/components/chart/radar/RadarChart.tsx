import { ChartProps } from '../../../types/chart';
import { RenderChart } from '../RenderChart';

export const RadarChart = (props: ChartProps) => <RenderChart {...props} type='radar' />;
