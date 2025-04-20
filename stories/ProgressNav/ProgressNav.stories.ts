import { ProgressNav } from './ProgressNav';


export default {
  title: 'ProgressNav',
  component: ProgressNav,
};

export const Default = {
  args: {
    status: "continued",
    deliveryTime: "12:35",
    percent: 70
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};