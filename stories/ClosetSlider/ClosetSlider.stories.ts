import {ClosetSlider} from './ClosetSlider';


export default {
    title: "ClosetSlider",
    component: ClosetSlider,
};

export const Default = {
    args: {
        imageUrls: [
            "/kolah.png",
            "/shalvar.png",
            "/img.png"
        ],

        matchPercent: 85,
        isSubImage: false,
        subMatchPercent: 78,
        subImageUrl: "img.png"
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};