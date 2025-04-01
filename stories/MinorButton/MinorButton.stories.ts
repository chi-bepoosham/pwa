import { MinorButton } from './MinorButton';



export default {
    title: "MinorButton",
    component: MinorButton,
};

export const Default = {
    args: {
        buttonTitle: "ورود بـــــا حســــاب گــــــوگل",
        size: "xl",
        variant: "solid",
        radius: "full",
        isLoading: false,
        color: "success"
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};