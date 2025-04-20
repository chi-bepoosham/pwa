import { Category } from './Category';


export default {
  title: 'Category',
  component: Category,
};

export const Default = {
  args: {
    isSize: false,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};