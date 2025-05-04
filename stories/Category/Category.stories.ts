import { Category } from './Category';


export default {
  title: 'Category',
  component: Category,
};

export const Default = {
  args: {
    variant: 'primary',
    options: [
      { title: 'Shirts' },
      { title: 'Pants' },
      { title: 'Shoes' },
      { title: 'Accessories' }
    ],
    className: 'my-4',
    defaultSelected: "Accessories",
    onChange: (selectedValue: string) => {
      console.log('Selected:', selectedValue);
    }
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};