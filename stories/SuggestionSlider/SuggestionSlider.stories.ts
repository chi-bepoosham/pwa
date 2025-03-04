import {SuggestionSlider} from './SuggestionSlider';


export default {
    title: "SuggestionSlider",
    component: SuggestionSlider,
};

export const Default = {
    args: {
        slides:[
            {
                imageUrl: "/img.png",
                name: "ascot tie"
            },
            {
                imageUrl: "/img2.png",
                name: "ascot tie"
            },
            {
                imageUrl: "/img.png",
                name: "ascot tie"
            },
            {
                imageUrl: "/img2.png",
                name: "ascot tie"
            },
            {
                imageUrl: "/img.png",
                name: "ascot tie"
            },
            {
                imageUrl: "/img2.png",
                name: "ascot tie"
            },
            {
                imageUrl: "/img.png",
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