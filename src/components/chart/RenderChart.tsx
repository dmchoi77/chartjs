import {
  Chart,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  Filler,
  RadarController,
  RadialLinearScale,
} from 'chart.js';
import { useEffect, useRef } from 'react';
import { ChartProps } from '../../types/chart';

Chart.register([
  LineController,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  RadarController,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
]);

export const RenderChart = (props: ChartProps) => {
  const { width, height, ...rest } = props;

  const chartRef = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const renderChart = () => {
    if (!canvasRef.current) return;
    chartRef.current = new Chart(canvasRef.current, {
      ...rest,
    });
  };

  const destroyChart = () => {
    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }
  };
  useEffect(() => {
    renderChart();

    return () => destroyChart();
  }, []);

  return (
    <div
      id='chart-wrapper'
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <canvas id='chart-content' ref={canvasRef} />
    </div>
  );
};
