import {SuggestionSlider} from './SuggestionSlider';


export default {
    title: "SuggestionSlider",
    component: SuggestionSlider,
};

export const Default = {
    args: {
        slides:[
            {
                imageUrl: "https://via.placeholder.com/150",
                name: "استایلی راحت و مدرن"
            },
            {
                imageUrl: "https://via.placeholder.com/150",
                name: "استایل رسمی و شیک"
            },
            {
                imageUrl: "https://via.placeholder.com/150",
                name: "استایل شبانه"
            },
            {
                imageUrl: "https://via.placeholder.com/150",
                name: "استایل روزمره"
            }
        ],
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};