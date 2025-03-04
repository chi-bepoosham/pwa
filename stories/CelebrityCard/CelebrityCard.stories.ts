import { CelebrityCard } from './CelebrityCard';



export default {
    title: "CelebrityCard",
    component: CelebrityCard,
};

export const Default = {
    args: {
        imageUrl: "image12.png",
        celebrityName: "C. Hemsworth"
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};