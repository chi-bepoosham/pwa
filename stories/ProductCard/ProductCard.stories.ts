import { ProductCard } from './ProductCard';



export default {
    title: "ProductCard",
    component: ProductCard,
};

export const Default = {
    args: {
        image: "img.png",
        productId: "کلاه پشم گاو",
        color: "primary",
        price: 189000
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};