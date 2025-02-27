import { UserProfile } from './UserProfile';



export default {
    title: "Profile",
    component: UserProfile,
};

export const Default = {
    args: {
        title: "تصویر نمایه",
        iconType: "add"
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};