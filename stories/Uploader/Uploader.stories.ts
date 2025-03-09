import {Uploader} from './Uploader';


export default {
    title: "Uploader",
    component: Uploader,
};

export const Default = {
    args: {
        title: "تصویر لباس ",
        iconType: "add",
        size: "medium"
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};