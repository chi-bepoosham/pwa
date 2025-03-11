import {OrdersCard} from './OrdersCard';


export default {
    title: "OrdersCard",
    component: OrdersCard,
};

export const Default = {
    args: {
        date: "1403/12/08\nچهارشنبه",
        productAmount: "کالا  2عدد",
        shop: "فروشگاه (جین‌وست - چرم مشهد)",
        status: "continued",
        progressPercent: 50,
        situation: "جاری",
        price: 3280000,
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};