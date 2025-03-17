import {ClosetSlider} from './ClosetSlider';


export default {
    title: "ClosetSlider",
    component: ClosetSlider,
};

export const Default = {
    args: {
        imageUrls: ["/kolah.png", "/shalvar.png", "/img.png"],
        matchPercent: 85,
        isSubImage: false,
        imageUrl: "kolah.png",
        subMatchPercent: 78
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};