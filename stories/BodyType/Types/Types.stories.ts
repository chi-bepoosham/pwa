import {Types} from './Types';


export default {
    title: "BodyType/Types",
    component: Types,
};

export const Default = {
    args: {
        selectedType: "rectangle"
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};