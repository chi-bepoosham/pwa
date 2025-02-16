import { Title } from './Title';



export default {
    title: "Title",
    component: Title,
};

export const Default = {
    args: {
        text: "Lorem Ipsum",
        withStar: true
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};