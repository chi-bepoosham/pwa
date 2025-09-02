import { ClosetCard } from './ClosetCard';



export default {
    title: "ClosetCard",
    component: ClosetCard,
};

export const Default = {
    args: {
        variant: "primary",
        imageUrl: "image.png",
        matchPercentage: "60",
        isSliderActive: false
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};