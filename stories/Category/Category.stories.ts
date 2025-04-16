import { Category } from './Category';


export default {
  title: 'Category',
  component: Category,
};

export const Default = {
  args: {
    withStar: true,
    textColor: 'white',
    starColor: 'white',
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};