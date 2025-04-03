import {ClosetSlider} from './ClosetSlider';


export default {
    title: "ClosetSlider",
    component: ClosetSlider,
};

export const Default = {
    args: {
        imageUrls: ["/kolah.png", "/shalvar.png", "/img.png", "kapshan.png"],
        matchPercent: 85,
        isSubImage: false,
        subMatchPercent: 78,
        subImageUrl: "img.png",
        titleEn: [
          "Attractive",
          "Attractive",
          "Attractive",
          "Attractive",
        ],
        titleFa: [
          "کـــاپشـن ضـــدآب کتــان مـــدل زارا",
          "کلاه پشم‌گاو",
          "کاپشن بادی کتان",
          "پلیور بافتنی مدل کلوش...",
        ]
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};