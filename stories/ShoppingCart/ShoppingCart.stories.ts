import {ShoppingCart} from './ShoppingCart';


export default {
    title: "ShoppingCart",
    component: ShoppingCart,
};

export const Default = {
    args: {
        material: "پلیور آستین بلند دوخت درشت",
        shop: "جـــین‌وســـت",
        size: "XL",
        colorCode: "black",
        colorName: "black",
        image: "img.png",
        price: 1
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};