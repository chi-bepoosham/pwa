import { SuggestionSlider } from './SuggestionSlider';


export default {
  title: 'SuggestionSlider',
  component: SuggestionSlider,
};

export const Default = {
  args: {
    slides: [
      {
        imageUrl: '/img.png',
        name: 'mgj',
      },
      {
        imageUrl: '/img2.png',
        name: 'smx',
      },
      {
        imageUrl: '/kolah.png',
        name: 'mgj',
      },
      {
        imageUrl: '/shalvar.png',
        name: 'mgj',
      },
      {
        imageUrl: '/kapshan.png',
        name: 'mgj',
      },
      {
        imageUrl: '/img2.png',
        name: 'mgj',
      },
      {
        imageUrl: '/img.png',
        name: 'mgj',
      },
    ],
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};