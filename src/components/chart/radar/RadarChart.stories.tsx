import { Meta, StoryFn } from '@storybook/react/*';
import { RadarChart } from './RadarChart';

const meta: Meta<typeof RadarChart> = {
  title: 'RadarChart',
  component: RadarChart,
  args: {
    width: 800,
    height: 800,
    data: {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 90, 81, 56, 55, 80],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Second Dataset',
          data: [58, 48, 70, 89, 96, 87, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
        },
      ],
    },
  },
};

export default meta;

export const Default: StoryFn<typeof RadarChart> = (args) => <RadarChart {...args} />;
