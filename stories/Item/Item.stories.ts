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
        price: 1.65,
        size: "XL",
        color: "primary",
        count: 1
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};