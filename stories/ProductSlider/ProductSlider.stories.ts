import {ProductSlider} from './ProductSlider';


export default {
    title: "ProductSlider",
    component: ProductSlider,
};

export const Default = {
    args: {
        images: ["/img.png", "/img2.png", "/img.png"]
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};