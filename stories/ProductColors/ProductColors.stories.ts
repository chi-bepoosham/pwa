import {ProductColors} from './ProductColors';


export default {
    title: "ProductColors",
    component: ProductColors,
};

export const Default = {
    args: {
        colors: [
            "#0C0E16",
            "#8B937A",
            "#48A3FF",
            "#FF9B48",
            "#A16BE0",
            "#4141F9",
            "#5252B1",
            "#ED6E6E"
        ]
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};