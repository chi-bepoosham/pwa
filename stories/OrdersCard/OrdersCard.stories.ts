import {OrdersCard} from './OrdersCard';


export default {
    title: "OrdersCard",
    component: OrdersCard,
};

export const Default = {
    args: {
        date: "چهارشنبه",
        productAmount: "کالا  2عدد",
        shop: "فروشگاه (جین‌وست - چرم مشهد)",
        status: "continued",
        progressPercent: 6,
        situation: "جاری"
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};