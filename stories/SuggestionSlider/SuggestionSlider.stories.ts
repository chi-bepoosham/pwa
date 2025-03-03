import {SuggestionSlider} from './SuggestionSlider';


export default {
    title: "SuggestionSlider",
    component: SuggestionSlider,
};

export const Default = {
    args: {
        slides:[
            {
                imageUrl: "/img_1.png",
                name: "ascot tie"
            },
            {
                imageUrl: "/img_3.png",
                name: "ascot tie"
            },
            {
                imageUrl: "/img_3.png",
                name: "ascot tie"
            },
            {
                imageUrl: "/img_3.png",
                name: "ascot tie"
            },
            {
                imageUrl: "/img_3.png",
                name: "ascot tie"
            },
            {
                imageUrl: "/img_3.png",
                name: "ascot tie"
            },
            {
                imageUrl: "/img_3.png",
                name: "ascot tie"
            },
        ],
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};