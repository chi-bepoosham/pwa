import {ClosetSlider} from './ClosetSlider';


export default {
    title: "ClosetSlider",
    component: ClosetSlider,
};

export const Default = {
    args: {
        imageUrl: "img.png",
        matchPercent: 85
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};