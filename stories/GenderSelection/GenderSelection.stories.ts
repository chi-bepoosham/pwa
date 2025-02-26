import {GenderSelection} from './GenderSelection';


export default {
    title: "GenderSelection",
    component: GenderSelection,
};

export const Default = {
    args: {
        title: "انتخاب جنسیت",
        options: [
            {label: "آقا",},
            {label: "خانم",},
            {label: "دیگر",},
        ]
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};