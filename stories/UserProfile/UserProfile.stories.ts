import { UserProfile } from './UserProfile';



export default {
    title: "Profile",
    component: UserProfile,
};

export const Default = {
    args: {
        title: "تصویر نمایه",
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};