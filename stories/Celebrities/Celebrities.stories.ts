import {Celebrities} from './Celebrities';


export default {
    title: "Celebrities",
    component: Celebrities,
};

export const Default = {
    args: {
        description: "سلبریتی دیگر",
        number: 4,
        customers: [
            {fullName: "صالح", avata: "/124.jpeg",id:"1"},
            {fullName: "ایلیا", avata: "https://i.pravatar.cc",id: "2"},
        ],
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};