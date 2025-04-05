import {Search} from './Search';


export default {
    title: "Search",
    component: Search,
};

export const Default = {
    args: {
        withFilter: false
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};