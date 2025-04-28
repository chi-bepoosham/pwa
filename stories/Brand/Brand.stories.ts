import { Brand } from './Brand';
import { ShopIcon } from '@/stories/Icons';



export default {
    title: "Brand",
    component: Brand,
};

export const Default = {
    args: {
        titleEn: "jeanwest",
        titleFa: "جـــین‌وســـت",
        titleEnColor: "black",
        titleFaColor: "blue",
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};