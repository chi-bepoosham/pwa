import { ClosetCard } from './ClosetCard';



export default {
    title: "ClosetCard",
    component: ClosetCard,
};

export const Default = {
    args: {
        variant: "primary",
        imageUrl: "image.png",
        matchPercentage: "60% مناسب با فرم بدن",
        isSliderActive: false
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};