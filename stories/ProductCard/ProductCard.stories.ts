import {ProductCard} from './ProductCard';


export default {
  title: "ProductCard",
  component: ProductCard,
};

export const Default = {
  args: {
    price: "859.000",
    description: "XL. 2X. 3X",
    title: "کلاه پشم‌گاو",
    imageUrl: "img.png",
    variant: "bordered",

    colors:
      [
        '#FF5733',
        '#33FF57',
        '#3357FF',
        '#F5A623'
      ],

    withArrow: false
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    }
  },
};