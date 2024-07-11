import { Meta, StoryObj } from '@storybook/react/*';
import { LineChart } from './LineChart';

const meta: Meta<typeof LineChart> = {
  component: LineChart,
};

export default meta;

type Story = StoryObj<typeof LineChart>;

const mockedData = {
  labels: ['1', '2', '3', '4', '5', '6', '7'],
  datasets: [
    {
      label: 'Line Chart',
      data: [65, 59, 80, 81, 56, 55, 40],
      tension: 0.1,
    },
  ],
};

export const Default: Story = {
  render: () => <LineChart width='800px' height='1600px' data={mockedData} />,
};
