import {ClosetSlider} from './ClosetSlider';


export default {
    title: "ClosetSlider",
    component: ClosetSlider,
};

export const Default = {
    args: {
        items : [
            {
              variant: 'primary',
              imageUrl: '/path/to/image1.jpg',
              matchPercentage: '80% مناسب با فرم بدن',
            },
            {
              variant: 'secondary',
              imageUrl: '/path/to/image2.jpg',
              matchPercentage: '75% مناسب با فرم بدن',
            },
            {
              variant: 'tertiary',
              imageUrl: '/path/to/image3.jpg',
              matchPercentage: '90% مناسب با فرم بدن',
            },
            {
                variant: 'quaternary',
                imageUrl: '/path/to/image4.jpg',
                matchPercentage: '90% مناسب با فرم بدن',
              },
        ],
    },
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
};