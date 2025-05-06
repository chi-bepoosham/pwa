import {SubImage} from './SubImage';


export default {
    title: "SubImage",
    component: SubImage,
};

export const Default = {
    args: {
        percentNumber: 54,
        subImageUrl: "image.png"
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};