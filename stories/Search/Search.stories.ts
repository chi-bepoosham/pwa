import {Search} from './Search';


export default {
    title: "Search",
    component: Search,
};

export const Default = {
    args: {
        withFilter: true
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};