import {Item} from './Item';


export default {
    title: "Item",
    component: Item,
};

export const Default = {
    args: {
        image: "img.png",
        title: "چرم مشهد",
        material: "پلیور آستین بلند دوخت درشت",
        price: 1650000,
        size: "XL",
        count: 1,
        colorName: "green",
        colorCode: "green"
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};