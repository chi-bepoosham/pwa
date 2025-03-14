import {SuggestedSet} from './SuggestedSet';


export default {
    title: "SuggestedSet",
    component: SuggestedSet,
};

export const Default = {
    args: {
        subImages: [
            "/kolah.png",
            "/shalvar.png",
        ],

        mainImage: "kapshan.png",
        matchPercent: 25
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};