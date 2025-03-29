import { Banner } from './Banner';



export default {
    title: "Banner",
    component: Banner,
};

export const Default = {
    args: {
        withStar: true,
        textColor: "white",
        starColor: "white"
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};