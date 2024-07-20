import { lazy, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react/*';

const RadarChart = lazy(() => import('./RadarChart').then(({ RadarChart }) => ({ default: RadarChart })));

const meta: Meta<typeof RadarChart> = {
  title: 'RadarChart',
  component: RadarChart,
  args: {
    width: 560,
    height: 560,
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

export const Default: StoryFn<typeof RadarChart> = (args) => {
  const [data, setData] = useState(args.data);

  const onClickUpdate = () =>
    setData((prev) => {
      const updatedDatasets = prev.datasets.map((dataset) => ({
        ...dataset,
        data: dataset.data.map(() => Math.floor(Math.random() * 30)),
      }));

      return {
        ...prev,
        datasets: updatedDatasets,
      };
    });

  return (
    <div>
      <RadarChart {...args} data={data} />
      <button onClick={onClickUpdate}>Update</button>
    </div>
  );
};
