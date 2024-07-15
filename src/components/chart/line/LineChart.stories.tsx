import { lazy } from 'react';
import { Meta, StoryFn } from '@storybook/react/*';

const LineChart = lazy(() => import('./LineChart').then(({ LineChart }) => ({ default: LineChart })));

const meta: Meta<typeof LineChart> = {
  title: 'LineChart',
  component: LineChart,
  args: {
    width: 800,
    height: 500,
    data: {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [
        {
          label: 'Line Chart',
          data: [65, 59, 80, 81, 56, 55, 40],
          tension: 0.1,
          fill: true,
          borderColor: 'skyblue',
        },
      ],
    },
  },
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    data: { control: 'object' },
  },
  decorators: [(Story) => <Story />],
};

export default meta;

export const Default: StoryFn<typeof LineChart> = (args) => <LineChart {...args} />;
