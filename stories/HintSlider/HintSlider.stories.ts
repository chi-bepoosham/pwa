import { HintSlider } from './HintSlider';


export default {
  title: 'HintSlider',
  component: HintSlider,
};

export const Default = {
  args: {
    slides: [
      { picture: '/banner.png', matchRate: 85, isCorrect: true },
      { picture: '/img_5.png', matchRate: 60, isCorrect: false },
      { picture: '/banner.png', matchRate: 90, isCorrect: true },
      { picture: '/img_5.png', matchRate: 85, isCorrect: false },
      { picture: '/banner.png', matchRate: 60, isCorrect: true },
      { picture: '/img_5.png', matchRate: 90, isCorrect: false },
    ],
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};